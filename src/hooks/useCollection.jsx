import { collection, onSnapshot } from "firebase/firestore";
import { useEffect, useState } from "react";
import { db } from "../Firebase/config";

const useCollection = (c) => {
  const [collectionData, setCollectionData] = useState(null);
  const [isLoarding, setIsLoarding] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    setIsLoarding(true);
    let ref = collection(db, c);
    const unsub = onSnapshot(ref, (snapshot) => {
      if (snapshot.empty) {
        setIsLoarding(false);
        setError("No items to Loard");
      } else {
        setIsLoarding(false);
        let result = [];
        snapshot.forEach((doc) => {
          result.push({ id: doc.id, ...doc.data() });
        });
        setCollectionData(result);
      }
    });
    return () => unsub();
  }, [c]);
  return { collectionData, isLoarding, error };
};
export default useCollection;
