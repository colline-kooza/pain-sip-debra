import { Button } from "@/components/ui/button";
import { CheckIcon } from "lucide-react";
import Link from "next/link";

export default function Page() {
  return (
    <div className="flex flex-col min-h-[100dvh] ">
      <main className="flex-1 ">
      {/* <section className="relative w-full py-28 md:py-24 lg:py-28  xl:py-38 overflow-hidden ">
  <div className="container relative z-10 px-4 md:px-6">
  <div className="flex flex-col items-center space-y-4 text-center">
    <div className="space-y-5">
      <h1 className="text-3xl leading-10 font-black tracking-normal sm:text-4xl md:text-5xl lg:text-5xl/none text-gray-900 dark:text-white lg:w-[1000px]">
        Paint and Sip Uganda Inventory Management
      </h1>
      <p className="mx-auto max-w-[800px] font-medium dark:font-medium text-gray-800 md:text-lg dark:text-gray-200 text-sm">
        Automate inventory and sales with precision. Ensuring accurate tracking and reduce discrepancies for a seamless experience.
      </p>
    </div>
    <div className="space-x-5">
      <Link
        className="inline-flex h-9 items-center justify-center rounded-md bg-gray-900 px-8 py-4 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
        href="/contact"
      >
        Contact us
      </Link>
      <Link
        className="inline-flex h-9 items-center justify-center rounded-md border border-gray-200 border-gray-200 bg-white px-8 py-5 text-sm font-medium shadow-sm transition-colors hover:bg-gray-100 hover:text-gray-900 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:border-gray-800 dark:border-gray-800 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus-visible:ring-gray-300"
        href="/dashboard/order-line"
      >
        Get Started
      </Link>
    </div>
  </div>
  <div
    className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
    aria-hidden="true"
  >
    <div
      className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
      style={{
        clipPath:
          "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
      }}
    ></div>
  </div>
</div>

</section> */}
<div className="relative isolate px-6 pt-2 lg:px-8">
    <div className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80" aria-hidden="true">
      <div className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"   style={{
        clipPath:
          "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
      }}></div>
    </div>
    <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-32">
      <div className="hidden sm:mb-8 sm:flex sm:justify-center">
        <div className="relative rounded-full px-3 py-1 text-sm leading-6 text-gray-600 dark:text-white ring-1 dark:ring-white ring-gray-900/10 hover:ring-gray-900/20">
          Announcing our next round of funding. <a href="#" className="font-semibold text-indigo-600"><span className="absolute inset-0" aria-hidden="true"></span>Read more <span aria-hidden="true">&rarr;</span></a>
        </div>
      </div>
      <div className="text-center">
        <h1 className="text-4xl font-bold tracking-tight dark:text-white text-gray-900 sm:text-6xl">Streamline Paint and Sip Inventory Today</h1>
        <p className="mt-6 text-lg leading-8 text-gray-600">Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat fugiat aliqua.</p>
        <div className="mt-10 flex items-center justify-center gap-x-6">
          <Link href="/dashboard/order-line" className="rounded-md bg-[#f59e0b] px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Get started</Link>
          <a href="/contact" className="text-sm font-semibold leading-6 dark:text-white text-gray-900">Learn more <span aria-hidden="true">→</span></a>
        </div>
      </div>
    </div>
    <div className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]" aria-hidden="true">
      <div className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"   style={{
        clipPath:
          "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
      }}></div>
    </div>
  </div>
<section className="mt-8">
	<div className="py-4 px-2 mx-auto max-w-screen-xl sm:py-4 lg:px-[3rem]">
		<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-4 h-full">
			<div className="col-span-2 sm:col-span-1 md:col-span-2  h-auto md:h-full flex flex-col">
				<a href="" className="group relative flex flex-col overflow-hidden rounded-lg px-4 pb-4 pt-40 flex-grow">
					<img src="https://media.istockphoto.com/id/1263263149/video/heres-to-turning-awesome-nights-into-awesome-memories.jpg?s=640x640&k=20&c=lY_MGbogL4GL2pud6X56djc0qEUYDGxaflgywWMRb98=" alt="" className="absolute inset-0 h-full w-full object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out"/>
					<div className="absolute inset-0 bg-gradient-to-b from-gray-900/25 to-gray-900/5"></div>
					<h3 className="z-10 text-xl font-medium text-white absolute top-0 left-0 p-4 xs:text-xl md:text-2xl">Enjoy</h3>
				</a>
			</div>
			<div className="col-span-2 sm:col-span-1 md:col-span-2 ">
				<a href="" className="group relative flex flex-col overflow-hidden rounded-lg px-4 pb-4 pt-40 mb-4">
					<img src="https://media.istockphoto.com/id/1367709479/video/exploding-fresh-juice-in-matte-alpha-channel-mask-in-slow-motion-4k.jpg?s=640x640&k=20&c=M4wTwCxoknyVbIojGbtiKobp8uZBdOyT7BVrfKQfevc=" alt="" className="absolute inset-0 h-full w-full object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out"/>
					<div className="absolute inset-0 bg-gradient-to-b from-gray-900/25 to-gray-900/5"></div>
					<h3 className="z-10 text-xl font-medium text-white absolute top-0 left-0 p-4 xs:text-xl md:text-2xl">Paint</h3>
				</a>
				<div className="grid gap-4 grid-cols-2 sm:grid-cols-2 lg:grid-cols-2">
					<a href="" className="group relative flex flex-col overflow-hidden rounded-lg px-4 pb-4 pt-40">
						<img src="https://img.freepik.com/premium-photo/girl-with-paint-her-hands-face_1057389-111439.jpg?ga=GA1.1.123314603.1706863307&semt=ais_hybrid" alt="" className="absolute inset-0 h-full w-full object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out"/>
						<div className="absolute inset-0 bg-gradient-to-b from-gray-900/25 to-gray-900/5"></div>
						<h3 className="z-10 text-xl font-medium text-white absolute top-0 left-0 p-4 xs:text-xl md:text-2xl">Face</h3>
					</a>
					<a href="" className="group relative flex flex-col overflow-hidden rounded-lg px-4 pb-4 pt-40">
						<img src="https://img.freepik.com/free-photo/young-adult-performing-modern-dance-choreography_23-2149429307.jpg?ga=GA1.1.123314603.1706863307&semt=ais_hybrid" alt="" className="absolute inset-0 h-full w-full object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out"/>
						<div className="absolute inset-0 bg-gradient-to-b from-gray-900/25 to-gray-900/5"></div>
						<h3 className="z-10 text-xl font-medium text-white absolute top-0 left-0 p-4 xs:text-xl md:text-2xl">Unlimited fun</h3>
					</a>
				</div>
			</div>
			<div className="col-span-2 sm:col-span-1 md:col-span-1  h-auto md:h-full flex flex-col">
				<a href="" className="group relative flex flex-col overflow-hidden rounded-lg px-4 pb-4 pt-40 flex-grow">
					<img src="https://img.freepik.com/free-photo/woman-80s-aesthetic-summer-clothing_23-2151016296.jpg?ga=GA1.1.123314603.1706863307&semt=ais_hybrid" alt="" className="absolute inset-0 h-full w-full object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out"/>
					<div className="absolute inset-0 bg-gradient-to-b from-gray-900/25 to-gray-900/5"></div>
					<h3 className="z-10 text-xl font-medium text-white absolute top-0 left-0 p-4 xs:text-xl md:text-2xl">Sip</h3>
				</a>
			</div>
		</div>
	</div>
    </section>

        <section className="w-full lg:py-12  py-8 bg-gray-50 dark:bg-gray-950 lg:px-[6rem] ">
          <div className="container px-4 md:px-6">
            <div className="grid items-center gap-6 grid-cols-1 lg:grid-cols-[1fr_500px] lg:gap-12  xl:grid-cols-[1fr_550px] px-2">
              <img
                alt="Point of Sale Illustration"
                className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full lg:order-last"
                height="310"
                src="https://media.istockphoto.com/id/939887872/video/cg-animation-of-color-powder-explosion-on-black-background-slow-motion-movement-with.jpg?s=640x640&k=20&c=HYzvwBn2WPHxPfdvbdyEcjwX8wVHfcUsfPnUJXkuHsA="
                width="550"
              />
              <div className="flex flex-col justify-center space-y-10 ">
                <div className="space-y-6">
                  <div className="inline-block rounded-lg bg-gray-100 px-3 py-1 text-sm dark:bg-gray-800">
                    Efficiency
                  </div>
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
                   Tracking Stock in  Paint & Sip
                  </h2>
                  <p className="max-w-[600px]  text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-lg/relaxed dark:text-gray-400">
                  Paint and Sip Uganda offers a unique blend of art and social experiences, particularly for food and beverages and other fun 
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Link
                    className="inline-flex h-10 items-center justify-center rounded-md bg-[#f59e0b] px-8 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-[#f59e0b] dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
                    href="/contact"
                  >
                    Contact Sales
                  </Link>
                 
                </div>
              </div>
            </div>
          </div>
        </section>
        <div className="max-w-screen-xl mx-auto p-5 sm:p-10 md:p-16">
    <div className="grid grid-cols-1 md:grid-cols-3 sm:grid-cols-2 gap-10">
        <div className="rounded overflow-hidden shadow-lg">
            <a href="#"></a>
            <div className="relative">
                <a href="#">
                    <img className="w-full"
                        src="https://img.freepik.com/free-photo/beyti-kebab-served-with-ayran-pickles_141793-1870.jpg?ga=GA1.1.123314603.1706863307&semt=ais_hybrid"
                        alt="Sunset in the mountains"/>
                    <div
                     className="hover:bg-transparent transition duration-300 absolute bottom-0 top-0 right-0 left-0  opacity-25">
                    </div>
                </a>
                <a href="#!">
                    <div
                        className="absolute bottom-0 left-0 bg-[#f59e0b] px-4 py-2 text-white text-sm hover:bg-white hover:text-indigo-600 transition duration-500 ease-in-out">
                        Photos
                    </div>
                </a>

                <a href="!#">
                    <div
                        className="text-sm absolute top-0 right-0 bg-[#f59e0b] px-4 text-white rounded-full h-16 w-16 flex flex-col items-center justify-center mt-3 mr-3 hover:bg-white hover:text-indigo-600 transition duration-500 ease-in-out">
                        <span className="font-bold">27</span>
                        <small>Aug</small>
                    </div>
                </a>
            </div>
            <div className="px-6 py-4">

                <a href="#"
                    className="font-semibold text-lg inline-block hover:text-indigo-600 transition duration-500 ease-in-out">Best
                    Meals in Kampala</a>
                <p className="text-gray-500 text-sm">
                    The place that holds all meals available 24hrs , affordable and reliable
                </p>
            </div>
           
        </div>
        <div className="rounded overflow-hidden shadow-lg">
            <a href="#"></a>
            <div className="relative">
                <a href="#">
                    <img className="w-full"
                        src="https://img.freepik.com/free-photo/top-view-sausage-pizza-with-tomato-red-bell-pepper-cheese-top-view_140725-7089.jpg?ga=GA1.1.123314603.1706863307&semt=ais_hybrid"
                        alt="Sunset in the mountains"/>
                    <div
                        className="hover:bg-transparent transition duration-300 absolute bottom-0 top-0 right-0 left-0 bg-gray-900 opacity-25">
                    </div>
                </a>
                <a href="#!">
                    <div
                        className="absolute bottom-0 left-0 bg-[#f59e0b] px-4 py-2 text-white text-sm hover:bg-white hover:text-indigo-600 transition duration-500 ease-in-out">
                        Photos
                    </div>
                </a>

                <a href="!#">
                    <div
                        className="text-sm absolute top-0 right-0 bg-[#f59e0b] px-4 text-white rounded-full h-16 w-16 flex flex-col items-center justify-center mt-3 mr-3 hover:bg-white hover:text-indigo-600 transition duration-500 ease-in-out">
                        <span className="font-bold">20</span>
                        <small>Aug</small>
                    </div>
                </a>
            </div>
            <div className="px-6 py-4">

                <a href="#"
                    className="font-semibold text-lg inline-block hover:text-indigo-600 transition duration-500 ease-in-out">Best
                    Pizza in Town</a>
                <p className="text-gray-500 text-sm">
                  Paint $ Sip provides the collection of best pizza types in kampala 
                </p>
            </div>
           
        </div>
        <div className="rounded overflow-hidden shadow-lg">

            <a href="#"></a>
            <div className="relative">
                <a href="#">
                    <img className="w-full"
                        src="https://img.freepik.com/free-photo/plate-assorted-snacks-wooden-table-chips-crackers-almonds-pistachios-sunflower-seeds_114579-20943.jpg?ga=GA1.1.123314603.1706863307&semt=ais_hybrid"
                        alt="Sunset in the mountains"/>
                    <div
                        className="hover:bg-transparent transition duration-300 absolute bottom-0 top-0 right-0 left-0 opacity-25">
                    </div>
                </a>
                <a href="#!">
                    <div
                        className="absolute bottom-0 left-0 bg-[#f59e0b] px-4 py-2 text-white text-sm hover:bg-white hover:text-indigo-600 transition duration-500 ease-in-out">
                        Photos
                    </div>
                </a>

                <a href="!#">
                    <div
                        className="text-sm absolute top-0 right-0 bg-[#f59e0b] px-4 text-white rounded-full h-16 w-16 flex flex-col items-center justify-center mt-3 mr-3 hover:bg-white hover:text-indigo-600 transition duration-500 ease-in-out">
                        <span className="font-bold">15</span>
                        <small>Aug</small>
                    </div>
                </a>
            </div>
            <div className="px-6 py-4">

                <a href="#"
                    className="font-semibold text-lg inline-block hover:text-indigo-600 transition duration-500 ease-in-out">Best
                    Snack Around</a>
                <p className="text-gray-500 text-sm">
                    Keep the fun with the best snacks around kampala paint while snacking
                </p>
            </div>
           
        </div>
    </div>
     </div>
  

    <div className="w-full dark:bg-gray-950 bg-gray-200 py-20  bg">
      <div className="container grid items-center gap-10 px-4 text-center md:px-6">
        <div className="space-y-3">
          <h2 className="text-3xl font-bold tracking-normal lg:tracking-normal sm:text-4xl md:text-4xl">Choose perfect plan</h2>
          <p className="mx-auto max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed text-xs xl:text-sm/relaxed dark:text-gray-400">
            Start with a 14-day free trial. No credit card required.
          </p>
        </div>
        <div className="grid max-w-sm mx-auto gap-4 sm:grid-cols-3 sm:max-w-4xl sm:gap-6 lg:gap-4 xl:gap-6">
          <div className="flex flex-col rounded-lg border border-gray-200 bg-white shadow-sm overflow-hidden dark:border-gray-800 dark:bg-gray-950">
            <div className="flex flex-col gap-4 p-6">
              <div className="space-y-2">
                <h3 className="text-2xl font-bold tracking-tighter">Hobbyist</h3>
                <p className="text-gray-500 dark:text-gray-400">Perfect for experimenting with personal projects</p>
              </div>
              <div className="space-y-2">
                <div className="flex items-baseline gap-2">
                  <span className="text-3xl font-bold">$</span>
                  <span className="text-5xl font-extrabold tracking-tighter">0</span>
                  <span className="text-gray-500 translate-y-1 dark:text-gray-400">/month</span>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-4 p-6 border-t border-gray-200 dark:border-gray-800">
              <ul className="grid gap-2 text-sm text-gray-500 divide-y dark:text-gray-400 divide-gray-200">
                <li className="flex items-center py-2">
                  <CheckIcon className="w-4 h-4 fill-current" />
                  <span className="ml-2 line-clamp-1">Unlimited projects</span>
                </li>
                <li className="flex items-center py-2">
                  <CheckIcon className="w-4 h-4 fill-current" />
                  <span className="ml-2 line-clamp-1">Up to 5 team members</span>
                </li>
              </ul>

                <Button size="sm" variant="outline">
                <Link href="/dashboard/order-line">

                Choose Plan
                </Link>
              </Button> 
            
             
            </div>
          </div>
          <div className="flex flex-col rounded-lg border border-gray-200 bg-white shadow-sm overflow-hidden dark:border-gray-800 dark:bg-gray-950">
            <div className="flex flex-col gap-4 p-6">
              <div className="space-y-2">
                <h3 className="text-2xl font-bold tracking-tighter">Professional</h3>
                <p className="text-gray-500 dark:text-gray-400">For growing teams and businesses</p>
              </div>
              <div className="space-y-2">
                <div className="flex items-baseline gap-2">
                  <span className="text-3xl font-bold">$</span>
                  <span className="text-5xl font-extrabold tracking-tighter">20</span>
                  <span className="text-gray-500 translate-y-1 dark:text-gray-400">/month</span>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-4 p-6 border-t border-gray-200 dark:border-gray-800">
              <ul className="grid gap-2 text-sm text-gray-500 divide-y dark:text-gray-400 divide-gray-200">
                <li className="flex items-center py-2">
                  <CheckIcon className="w-4 h-4 fill-current" />
                  <span className="ml-2 line-clamp-1">Unlimited projects</span>
                </li>
                <li className="flex items-center py-2">
                  <CheckIcon className="w-4 h-4 fill-current" />
                  <span className="ml-2 line-clamp-1">Unlimited team members</span>
                </li>
              </ul>
                <Button size="sm" variant="outline">
              <Link href="/contact">
                Choose Plan
              </Link>
              </Button>
            
            </div>
          </div>
          <div className="flex flex-col rounded-lg border border-gray-200 bg-white shadow-sm overflow-hidden dark:border-gray-800 dark:bg-gray-950">
            <div className="flex flex-col gap-4 p-6">
              <div className="space-y-2">
                <h3 className="text-2xl font-bold tracking-tighter">Enterprise</h3>
                <p className="text-gray-500 dark:text-gray-400">Advanced features for large organizations</p>
              </div>
              <div className="space-y-2">
                <div className="flex items-baseline gap-2">
                  <span className="text-3xl font-bold">$</span>
                  <span className="text-5xl font-extrabold tracking-tighter">100</span>
                  <span className="text-gray-500 translate-y-1 dark:text-gray-400">/month</span>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-4 p-6 border-t border-gray-200 dark:border-gray-800">
              <ul className="grid gap-2 text-sm text-gray-500 divide-y dark:text-gray-400 divide-gray-200">
                <li className="flex items-center py-2">
                  <CheckIcon className="w-4 h-4 fill-current" />
                  <span className="ml-2 line-clamp-1">Unlimited projects</span>
                </li>
                <li className="flex items-center py-2">
                  <CheckIcon className="w-4 h-4 fill-current" />
                  <span className="ml-2 line-clamp-1">SSO and advanced security</span>
                </li>
              </ul>

              <Button size="sm" variant="outline">
              <Link href="/contact">
                Choose Plan
              </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>

   

     
      </main>
    
    </div>
  );
}
