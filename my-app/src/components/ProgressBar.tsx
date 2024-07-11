const ProgressBar = (props:any) => {
    const {status} = props
    const bar:any = {
        null:0,
        ordered:20,
        package:40,
        shipped:60,
        outForDelivery: 70,
        delivered: 100,
    }
  return (
    <div className=" m-5 w-60 h-5 border border-black bg-slate-800 rounded-3xl">
      <div className={`h-full w-[${bar[status]}%] bg-slate-300 rounded-3xl`}></div>
    </div>
  );
}

export default ProgressBar
