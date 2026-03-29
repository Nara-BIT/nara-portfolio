import { useState, useEffect } from "react";
import { fallbackProjects } from "../data/constants";

const GITHUB_USERNAME = "Nara-BIT";
const API_URL = `https://api.github.com/users/${GITHUB_USERNAME}/repos?sort=updated&per_page=30&type=owner`;

export default function useGithubRepos() {
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let cancelled = false;

    async function fetchRepos() {
      try {
        const res = await fetch(API_URL);
        if (!res.ok) throw new Error("GitHub API rate-limited or unavailable");

        const data = await res.json();

        if (!cancelled && Array.isArray(data)) {
          const filtered = data
            .filter((r) => !r.fork && r.description)
            .sort((a, b) => b.stargazers_count - a.stargazers_count)
            .slice(0, 6);

          setRepos(filtered.length > 0 ? filtered : fallbackProjects);
        }
      } catch (err) {
        if (!cancelled) {
          setError(err.message);
          setRepos(fallbackProjects);
        }
      } finally {
        if (!cancelled) setLoading(false);
      }
    }

    fetchRepos();
    return () => {
      cancelled = true;
    };
  }, []);

  return { repos, loading, error };
}