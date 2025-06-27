import { useState, useEffect } from 'react';
import axios from 'axios';

export const useFetchRelationships = () => {
  const [relationships, setRelationships] = useState(null);

  const fetchRelationships = async () => {
    try {
      const response = await axios.get('/api/relationships');
      setRelationships(response.data);
    } catch (error) {
      console.error("Error fetching relationships: ", error);
    }
  };

  useEffect(() => {
    fetchRelationships();
  }, []);

  return { relationships, fetchRelationships };
}