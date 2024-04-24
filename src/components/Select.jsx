import "../styles/select.scss";

const Select = () => {
  return (
    <>
      <div className="select">
        <h6>분야</h6>
        <select name="field" id="select">
          <option value="all">전체 보기</option>
          <option value="it">IT•소프트웨어•게임</option>
          <option value="sience">과학•공학•기술</option>
          <option value="sports">스포츠</option>
          <option value="picture">사진</option>
          <option value="art">그림•미술</option>
          <option value="idea">아이디어•제안</option>
        </select>
      </div>
    </>
  );
};

export default Select;
