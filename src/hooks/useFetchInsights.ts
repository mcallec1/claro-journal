import { useState, useEffect } from 'react';
import axios from 'axios';

export const useFetchInsights = () => {
  const [insight, setInsight] = useState(null);
  const [loading, setLoading] = useState(false);

  const fetchInsights = async () => {
    setLoading(true);
    try {
      const response = await axios.get('/api/insights');
      setInsight(response.data);
    } catch (error) {
      console.error("Error fetching insights: ", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchInsights();
  }, []);

  return { insight, loading, fetchInsights };
}