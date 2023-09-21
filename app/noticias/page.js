import Image from "next/image";

export default function Noticias() {
    return (
        <section>
            <div class="grid grid-cols-1 gap-4 lg:grid-cols-4 lg:gap-8">
                <div class="h-32 rounded-lg bg-gray-100">
                    <article class="overflow-hidden rounded-lg shadow transition hover:shadow-lg">

                        <Image
                            src="/images/DIRECTORIO_OK.png"
                            alt="Vercel Logo"
                            className=""
                            width={1000}
                            height={1000}


                        />
                        <div class="bg-white p-4 sm:p-6">
                            <time datetime="2022-10-10" class="block text-xs text-gray-500">
                                21 Sep 2022
                            </time>

                            <a href="#">
                                <h3 class="mt-0.5 text-lg text-gray-900">
                                    Lorem
                                </h3>
                            </a>

                            <p class="mt-2 line-clamp-3 text-sm/relaxed text-gray-500">
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae
                                dolores, possimus pariatur animi temporibus nesciunt praesentium dolore
                                sed nulla ipsum eveniet corporis quidem, mollitia itaque minus soluta,
                                voluptates neque explicabo tempora nisi culpa eius atque dignissimos.
                                Molestias explicabo corporis voluptatem?
                            </p>
                        </div>
                    </article>
                </div>
                <div class="h-32 rounded-lg bg-gray-100 lg:col-span-2">
                    <article class="flex bg-white transition hover:shadow-xl">
                        <div class="rotate-180 p-2 [writing-mode:_vertical-lr]">
                            <time
                                datetime="2022-10-10"
                                class="flex items-center justify-between gap-4 text-xs font-bold uppercase text-gray-900"
                            >
                                <span>2022</span>
                                <span class="w-px flex-1 bg-gray-900/10"></span>
                                <span>Oct 10</span>
                            </time>
                        </div>

                        <div class="hidden sm:block sm:basis-56">
                            <Image
                                src="/images/University-of-Alabama-EngineeringResearchCenter-01.jpg"
                                alt="Vercel Logo"
                                className=""
                                width={1000}
                                height={1000}


                            />
                        </div>

                        <div class="flex flex-1 flex-col justify-between">
                            <div class="border-s border-gray-900/10 p-4 sm:border-l-transparent sm:p-6">
                                <a href="#">
                                    <h3 class="font-bold uppercase text-gray-900">
                                        Finding the right guitar for your style - 5 tips
                                    </h3>
                                </a>

                                <p class="mt-2 line-clamp-3 text-sm/relaxed text-gray-700">
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae
                                    dolores, possimus pariatur animi temporibus nesciunt praesentium dolore
                                    sed nulla ipsum eveniet corporis quidem, mollitia itaque minus soluta,
                                    voluptates neque explicabo tempora nisi culpa eius atque dignissimos.
                                    Molestias explicabo corporis voluptatem?
                                </p>
                            </div>

                            <div class="sm:flex sm:items-end sm:justify-end">
                                <a
                                    href="#"
                                    class="block bg-yellow-300 px-5 py-3 text-center text-xs font-bold uppercase text-gray-900 transition hover:bg-yellow-400"
                                >
                                    Read Blog
                                </a>
                            </div>
                        </div>
                    </article>
                </div>
                <div class="h-32 rounded-lg bg-gray-100"></div>
            </div>
            <div>

            </div>
        </section>
    );
}
