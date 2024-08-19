import Notes from "./Notes";
export default function Home(props) {
  const{showAlert}=props
  return (
    <>
      <div className="container">Welcome</div>
      <Notes showAlert={showAlert}/>
    </>
  );
}
