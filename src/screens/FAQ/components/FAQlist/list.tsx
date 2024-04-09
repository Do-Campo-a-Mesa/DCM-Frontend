import { FAQ } from '../../../../lib/interfaces/FAQ';
import FAQlist from '.';
interface Props {
  FAQs: FAQ[];
}
const FAQPageList: React.FC<Props> = ({ FAQs }) => {
  return (
    <div>
      {FAQs.map((faq: FAQ) => (
        <FAQlist key={faq.id} FAQs={faq} />
      ))}
    </div>
  );
};

export default FAQPageList;
