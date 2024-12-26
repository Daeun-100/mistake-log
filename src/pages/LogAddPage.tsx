import MistakeForm from '../components/mistakeForm/MistakeForm';

type OwnProps = {
  onClickBack: () => void;
  onclickSubmint: () => void;
};

const LogAddPage: React.FC<OwnProps> = ({ onClickBack, onclickSubmint }) => {
  return (
    <div>
      <div onClick={onClickBack}>뒤로가기</div>
      <MistakeForm onClickSubmit={onclickSubmint} />
    </div>
  );
};

export default LogAddPage;
