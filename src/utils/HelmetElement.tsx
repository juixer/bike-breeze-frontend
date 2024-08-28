import { Helmet } from "react-helmet-async";
const HelmetElement = ({ text }: { text: string }) => {
  return (
    <Helmet>
      <title>Bike Breeze | {text}</title>
    </Helmet>
  );
};
export default HelmetElement;
