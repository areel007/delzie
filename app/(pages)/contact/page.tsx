export default function ContactPage() {
    return (
        <main>
            <div className="h-[44px]"></div>
            <div className="py-[40px] md:py-[60px]">
                <div className="max-w-[900px] w-[90%] mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-[40px] md:gap-[60px]">
                        <div className="">
                            <h1 className="text-2xl md:2xl font-[600] text-black/[.7] dark:text-white/[.7] mb-[20px]">
                                <span className="font-[300] text-[14px] md:text-[16px] text-[#00ff00] leading-[1]">Contact Us</span> <br />
                                <span>Get in touch</span>
                            </h1>

                            <form className="flex flex-col gap-[5px]">
                                <input type="text" placeholder="name..." className="p-[10px] border border-black/[.7] dark:border-white/[.7] w-full" />

                                <input type="email" placeholder="email..." className="p-[10px] border border-black/[.7] dark:border-white/[.7] w-full" />

                                <input type="text" placeholder="title..." className="p-[10px] border border-black/[.7] dark:border-white/[.7] w-full" />

                                <textarea name="" id="" placeholder="message..." className="p-[10px] border border-black/[.7] dark:border-white/[.7] w-full h-[150px]"></textarea>

                                <button className="p-[10px] text-white/[.7] dark:text-[#fff]/[.7] bg-[#000]/[.7] dark:bg-white/[.09] hover:bg-white/[.1] cursor-pointer transition duration-[.3s]">submit</button>
                            </form>
                        </div>

                        <div className="flex flex-col gap-[20px] text-[#000]/[.7] dark:text-[#fff]/[.7]">
                            <p className="text-[14px] md:text-[16px]">
                                <span className="font-[600]">Contact Information</span>
                            </p>

                            <div className="grid grid-cols-2 gap-[20px] text-[13px]">
                                <div className="flex flex-col justify-center items-center text-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
                                    </svg>

                                    <span>Phone Number</span>

                                    <span>+234 (0) 802 894 3665</span>
                                </div>

                                <div className="flex flex-col justify-center items-center tex-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 12a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0Zm0 0c0 1.657 1.007 3 2.25 3S21 13.657 21 12a9 9 0 1 0-2.636 6.364M16.5 12V8.25" />
                                    </svg>


                                    <span>Email Address</span>

                                    <span>info@devdelz.io</span>
                                </div>

                                <div className="flex flex-col justify-center items-center text-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640" className="size-6 fill-white/[.7]"><path d="M476.9 161.1C435 119.1 379.2 96 319.9 96C197.5 96 97.9 195.6 97.9 318C97.9 357.1 108.1 395.3 127.5 429L96 544L213.7 513.1C246.1 530.8 282.6 540.1 319.8 540.1L319.9 540.1C442.2 540.1 544 440.5 544 318.1C544 258.8 518.8 203.1 476.9 161.1zM319.9 502.7C286.7 502.7 254.2 493.8 225.9 477L219.2 473L149.4 491.3L168 423.2L163.6 416.2C145.1 386.8 135.4 352.9 135.4 318C135.4 216.3 218.2 133.5 320 133.5C369.3 133.5 415.6 152.7 450.4 187.6C485.2 222.5 506.6 268.8 506.5 318.1C506.5 419.9 421.6 502.7 319.9 502.7zM421.1 364.5C415.6 361.7 388.3 348.3 383.2 346.5C378.1 344.6 374.4 343.7 370.7 349.3C367 354.9 356.4 367.3 353.1 371.1C349.9 374.8 346.6 375.3 341.1 372.5C308.5 356.2 287.1 343.4 265.6 306.5C259.9 296.7 271.3 297.4 281.9 276.2C283.7 272.5 282.8 269.3 281.4 266.5C280 263.7 268.9 236.4 264.3 225.3C259.8 214.5 255.2 216 251.8 215.8C248.6 215.6 244.9 215.6 241.2 215.6C237.5 215.6 231.5 217 226.4 222.5C221.3 228.1 207 241.5 207 268.8C207 296.1 226.9 322.5 229.6 326.2C232.4 329.9 268.7 385.9 324.4 410C359.6 425.2 373.4 426.5 391 423.9C401.7 422.3 423.8 410.5 428.4 397.5C433 384.5 433 373.4 431.6 371.1C430.3 368.6 426.6 367.2 421.1 364.5z" /></svg>


                                    <span>Whatsapp</span>

                                    <span>+234 (0) 802 894 3665</span>
                                </div>

                                <div className="flex flex-col justify-center items-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                                    </svg>



                                    <span>Address</span>

                                    <span>Lagos, Nigeria</span>
                                </div>
                            </div>

                            <div className="w-full h-[220px] bg-black">
                                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16763.826114600124!2d3.3762921016687084!3d6.539312295255321!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b8d066ea84e95%3A0xce26bf31be062ccb!2sBariga%2C%20Oworonshoki%20102216%2C%20Lagos!5e1!3m2!1sen!2sng!4v1753380175593!5m2!1sen!2sng" className="w-full h-full" style={{ border: 0 }} loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                            </div>
                        </div>


                    </div>
                </div>
            </div>
        </main>
    )
}