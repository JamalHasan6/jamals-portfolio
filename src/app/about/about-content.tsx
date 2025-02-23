export default function AboutContent() {
    return (
        <section className="bg-gray-900 text-white">
            <div className="mx-auto max-w-screen-xl px-4 py-32 lg:flex lg:h-screen lg:items-center">
                <div className="mx-auto max-w-3xl text-center">

                    <div className="flow-root rounded-lg border border-gray-100 py-3 shadow-xs dark:border-gray-700">
                        <dl className="-my-3 divide-y divide-gray-100 text-sm dark:divide-gray-700">
                            <div className="grid grid-cols-1 gap-1 p-3 sm:grid-cols-3 sm:gap-4">
                                <dt className="font-medium text-gray-900 dark:text-white">Title</dt>
                                <dd className="text-gray-700 sm:col-span-2 dark:text-gray-200">Mr</dd>
                            </div>

                            <div className="grid grid-cols-1 gap-1 p-3 sm:grid-cols-3 sm:gap-4">
                                <dt className="font-medium text-gray-900 dark:text-white">Name</dt>
                                <dd className="text-gray-700 sm:col-span-2 dark:text-gray-200">John Frusciante</dd>
                            </div>

                            <div className="grid grid-cols-1 gap-1 p-3 sm:grid-cols-3 sm:gap-4">
                                <dt className="font-medium text-gray-900 dark:text-white">Occupation</dt>
                                <dd className="text-gray-700 sm:col-span-2 dark:text-gray-200">Guitarist</dd>
                            </div>

                            <div className="grid grid-cols-1 gap-1 p-3 sm:grid-cols-3 sm:gap-4">
                                <dt className="font-medium text-gray-900 dark:text-white">Salary</dt>
                                <dd className="text-gray-700 sm:col-span-2 dark:text-gray-200">$1,000,000+</dd>
                            </div>

                            <div className="grid grid-cols-1 gap-1 p-3 sm:grid-cols-3 sm:gap-4">
                                <dt className="font-medium text-gray-900 dark:text-white">Bio</dt>
                                <dd className="text-gray-700 sm:col-span-2 dark:text-gray-200">
                                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Et facilis debitis explicabo
                                    doloremque impedit nesciunt dolorem facere, dolor quasi veritatis quia fugit aperiam
                                    aspernatur neque molestiae labore aliquam soluta architecto?
                                </dd>
                            </div>
                        </dl>
                    </div>
                </div>
            </div>
        </section>
    );
}