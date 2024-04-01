
const contact = () => {
  return (
    <div className="bg-black h-[40rem]">
      <p className="text-5xl font-semibold pt-48 text-white text-center">Contact Us</p>
      <p className="mx-auto text-center pt-7 text-white w-1/2 pb-6">Whether you have questions, feedback, or simply want to say hello, we're here to assist you.
        At The Hungry Hideaway, we value your input and strive to provide exceptional service. Your satisfaction
        is our top priority, and we're committed to ensuring that your dining experience with us exceeds your
        expectations.</p>
      <div className="flex justify-center w-1/2">
        <form className="text-white mx-auto">
          <p className="pb-5"><input type="text" className="w-full " /></p>
          <p><textarea name="" id="" className="w-full"></textarea></p>
        </form>
      </div>
    </div>

  )
}

export default contact