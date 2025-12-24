import { Helmet } from "react-helmet-async";

export default function PageTitle({ title, }) {
  return (
    <Helmet>
      <title>恆春感性移居手冊｜{title}</title>

      <meta name="description" content="在南國風與光裡，找到生活的節奏" />
    </Helmet>
  );
}
