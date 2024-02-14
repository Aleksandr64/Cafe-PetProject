import { useGetTestMutation } from "../../redux/API/testApiSlice";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const TestReAuth = () => {
  const user = useSelector((state) => state.auth.user);
  const [testData, setTestData] = useState("");
  const [isSuccess, setIsSuccess] = useState(false);
  const [isError, setIsError] = useState(false);
  const [error, setError] = useState("");

  const [getTest, { isLoading }] = useGetTestMutation();

  useEffect(() => {
    const fetchData = async () => {
      setIsSuccess(false);
      setIsError(false);
      try {
        // eslint-disable-next-line react-hooks/rules-of-hooks
        const response = await getTest();
        console.log(response);
        setTestData(response.data.message);
        setIsSuccess(true);
      } catch (error) {
        setError(error.message);
        setIsError(true);
      }
    };

    fetchData();
  }, [user]);

  let content;
  if (isLoading) {
    content = <p>Loading...</p>;
  } else if (isSuccess) {
    content = <h1>{testData}</h1>;
  } else if (isError) {
    content = <h1>{error}</h1>;
  }
  return content;
};

export default TestReAuth;
