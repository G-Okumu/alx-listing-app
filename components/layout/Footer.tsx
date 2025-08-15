export default function Footer() {
    return (


        <footer className="bg-gray-900">
            <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
                <div className="md:grid md:grid-cols-2 gap-8">
                    <div className="mb-6 md:mb-0">
                        <a href="https://alx.com/" className="flex items-center">
                            <span className="self-center text-2xl font-semibold whitespace-nowrap text-white">ALX</span>
                        </a>

                        <p className="pt-2">
                            Als is a platform where travellers discover and book unique, comfortable, and affordable lodging options worldwide.
                            From cozy city apartments and tranquil countryside retreats to exotic beachside villas. ALX connects you with the perfect place to stay for any trip.
                        </p>
                    </div>
                    <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
                        <div>
                            <h2 className="mb-6 text-sm font-semibold text-white">Explore</h2>
                            <ul className="text-gray-400 font-medium">
                                <li>
                                    Apartments in Dubai
                                </li>
                                <li className="my-2">
                                    Hotels in New York
                                </li>
                                <li>
                                    Villa in Spain
                                </li>
                                <li className="my-2">
                                    Mansion in Indonesia
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h2 className="mb-6 text-sm font-semibold text-white">Company</h2>
                            <ul className="text-gray-400 font-medium">
                                <li>
                                    About us
                                </li>
                                <li className="my-2">
                                    Blog
                                </li>
                                <li className="my-2">
                                    Career
                                </li>
                                <li>
                                    Customers
                                </li>
                                <li className="my-2">Brand</li>
                            </ul>
                        </div>
                        <div>
                            <h2 className="mb-6 text-sm font-semibold text-white">Help</h2>
                            <ul className="text-gray-400 font-medium">
                                <ul className="text-gray-400 font-medium">
                                    <li>
                                        Support
                                    </li>
                                    <li className="my-2">
                                        Cancel Booking
                                    </li>
                                    <li>
                                        Refunds Process
                                    </li>
                                </ul>
                            </ul>
                        </div>
                    </div>
                </div>
                <hr className="my-6 sm:mx-auto border-gray-700 lg:my-8" />
                <div className="sm:flex sm:items-center sm:justify-between">
                    <span className="text-sm sm:text-center text-gray-400">
                        Some hotels requires you to cancel more than 24 hrs before checkin-in. Details <a href="#" className="text-green-700">here</a>
                    </span>
                    <div className="flex mt-4 sm:justify-center sm:mt-0">
                        <a href="#" className="text-gray-500 text-white">
                            Terms of Service
                        </a>
                        <a href="#" className="text-gray-500 text-white ms-5">
                            Policy Service
                        </a>
                        <a href="#" className="text-gray-500 text-white ms-5">
                            Cookies Policy
                        </a>
                        <a href="#" className="text-gray-500 text-white ms-5">
                            Partners
                        </a>
                    </div>
                </div>
            </div>
        </footer>

    )
}