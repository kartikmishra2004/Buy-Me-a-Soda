import Paymentpage from '@/components/Paymentpage'

const Username = ({ params }) => {
  return (
    <>
      <Paymentpage username={params.username} />
    </>
  )
}

export default Username
