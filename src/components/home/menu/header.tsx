import logo from "../../../assets/images/logo.png";
export function Header() {
  return (
    <div className="flex flex-col gap-2 items-center  text-black">
      <div className="flex gap-2 items-center">
        <img src={logo} width="30px" height="30px" />
        <h1 className="text-xl font-bold">StarBucks</h1>
      </div>
      <div className="">StarBucks Online Coffee Order</div>
    </div>
  );
}
