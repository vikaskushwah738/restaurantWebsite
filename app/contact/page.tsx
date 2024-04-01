import { Meteors } from "@/components/ui/meteors";
const contact = () => {
  return (
    <div className="bg-gray-900 h-[40rem]">
      <p className="text-5xl font-semibold pt-40 text-white text-center">Contact Us</p>
      <p className="mx-auto text-center pt-7 text-white w-1/2 pb-6">Whether you have questions, feedback, or simply want to say hello, we're here to assist you.
        At The Hungry Hideaway, we value your input and strive to provide exceptional service. Your satisfaction
        is our top priority, and we're committed to ensuring that your dining experience with us exceeds your
        expectations.</p>
      
        <form className="text-white mx-auto w-1/2 flex justify-center flex-col">
          <div className="pb-6"><input type="text" className="w-full bg-black p-3 rounded-md" placeholder="your e-mail address"/></div>
          <div className="pb-6"><textarea name="" id="" className="w-full bg-black p-3 rounded-md " placeholder="your message"></textarea></div>
          <div className="pb-6 flex justify-center items-center"><input type="submit" value={'submit'} className="w-32 bg-black border-2 border-white hover:bg-gray-900 p-2 rounded-md" /></div>
          
        </form>
       
        <Meteors number={50} />
    </div>

  )
}

export default contact