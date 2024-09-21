import Paymentpage from '@/components/Paymentpage'
import connectDb from '@/db/dbConnection';
import User from '@/models/User';
import { notFound } from "next/navigation";

const Username = async ({ params }) => {

  await connectDb()
  let u = await User.findOne({ username: params.username })
  if (!u) {
    return notFound();
  } else {
    return (
      <>
        <Paymentpage username={params.username} />
      </>
    )
  }
}

export default Username
