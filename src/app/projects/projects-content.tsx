export default function ProjectsContent() {
    return (
        <section className="bg-gray-900 text-white">
            <div className="mx-auto max-w-screen-xl px-4 py-32 lg:flex lg:h-screen lg:items-center">
                <div className="mx-auto max-w-3xl text-center">
                    <h1
                        className="bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 bg-clip-text text-3xl font-extrabold text-transparent sm:text-5xl"
                    >
                        {`Projects`}


                        {/* <span className="sm:block"> Welcome to website. </span> */}
                    </h1>

                    <p className="mx-auto mt-4 max-w-xl sm:text-xl/relaxed">
                        Welcome to my website ! Where you can see my entire portfolio through this website.
                    </p>

                    <div className="mt-8 flex flex-wrap justify-center gap-4">
                        <a
                            className="block w-full rounded-sm border border-blue-600 bg-blue-600 px-12 py-3 text-sm font-medium text-white hover:bg-transparent hover:text-white focus:ring-3 focus:outline-hidden sm:w-auto"
                            href="#"
                        >
                            Projects
                        </a>

                        <a
                            className="block w-full rounded-sm border border-blue-600 px-12 py-3 text-sm font-medium text-white hover:bg-blue-600 focus:ring-3 focus:outline-hidden sm:w-auto"
                            href="#"
                        >
                            Contact
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}