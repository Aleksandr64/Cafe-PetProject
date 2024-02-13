import { useGetTestQuery } from "../../redux/API/testApiSlice";

const TestReAuth = () => {
  let { data: test, isLoading, isSuccess, isError, error } = useGetTestQuery();

  let content;
  if (isLoading) {
    content = <p>"Loading...</p>;
  } else if (isSuccess) {
    content = <h1>{test.message}</h1>;
  } else if (isError) {
    content = <h1>{JSON.stringify(error)}</h1>;
  }
  return content;
};

export default TestReAuth;
