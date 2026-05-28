export default function BlogSkeleton() {
    return (
        <>
            <section
                className="py-16 lg:py-20 bg-[#e3eff8]"
                aria-label="News Articles and Blogs"
            >
                <div className="lg:max-w-6xl xl:max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <p className="text-sm font-semibold uppercase tracking-wider text-[#4291CE] mb-3">
                            Latest trends
                        </p>

                        <h2 className="font-display text-3xl lg:text-4xl font-bold text-gray-900">
                            Explore Latest News, Articles, And Blogs
                        </h2>
                    </div>
                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {[1, 2, 3].map((i) => (
                            <div key={i} className="animate-pulse">
                                <div className="h-56 bg-gray-300 rounded-2xl" />
                                <div className="h-4 bg-gray-300 rounded mt-4 w-1/3" />
                                <div className="h-5 bg-gray-300 rounded mt-3" />
                                <div className="h-5 bg-gray-300 rounded mt-2 w-5/6" />
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
}