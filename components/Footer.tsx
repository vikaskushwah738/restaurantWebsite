import Link from "next/link"

const Footer = () => {
  return (
    <footer className="bg-black text-gray-400 py-12">
        <div className="max-w-6xl mx-auto grid grid-col-1 
        sm:grid-cols-2 lg:grid-cols-4 gap-8 px-4 sm:px-6
        lg:px-8">
         <div>
            <h2 className="text-white text-lg font-semibold
            mb-4">About Us</h2>
            <p className="mb-4">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque minima placeat alias iste tenetur. Sit a nobis iusto reprehenderit voluptatum quo, laudantium quia quaerat consequatur corporis mollitia dolores odit voluptas.
            </p>
         </div>
         <div>
         <h2 className="text-white text-lg font-semibold
            mb-4">Quick Link</h2>
            <ul>
                <li><Link href={'/'}>Home</Link></li>
                <li><Link href={'/about-us'}>About-us</Link></li>
                <li><Link href={'/blog'}>Blog</Link></li>
                <li><Link href={'/contact'}>Contact</Link></li>
            </ul>
         </div>
         <div>
         <h2 className="text-white text-lg font-semibold
            mb-4">Follow us</h2>
            <div className=" flex space-x-4">
            <Link href={'/'}>Facebook</Link>
            <Link href={'/'}>LinkDin</Link>
            <Link href={'/'}>X</Link>
            <Link href={'/'}>Instagram</Link>
            </div>
           
         </div>
         <div>
         <h2 className="text-white text-lg font-semibold
            mb-4">Contact us</h2>
          <p>Hyderabad</p>
          <p>Hyderabad vansthalipuram 04</p>
          <p>Email: Ramesh@gmail.com</p>
          <p>Phone: +91 6307869809</p>
         </div>
        </div>
        <p className="text-center text-xs pt-8">© 2024 The Hungry Hideaway: All right reserved</p>
    </footer>
  )
}

export default Footer