import Image from "next/image";

export default function BlogPage() {
    return <div className="max-w-[800px] w-[90%] mx-auto mb-[40px] min-h-[50vh] text-[#000]/[.7] dark:text-[#fff]/[.7]">
        {!true ? <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-[40px]">
            <div className="relative">
                <div className="w-full relative h-[200px] flex justify-center items-center before:absolute before:inset-0 before:bg-black/50 before:z-10 mb-[10px]">
                    <Image src="/images/delz.png" alt="" width={100} height={100} className="w-full h-full object-cover absolute inset-0" />
                    <div className="relative w-[80%] mx-auto z-[11]">
                        <p className="text-center text-[12px]">In Memory of Mikeal Rogers: A Builder of Communities</p>
                    </div>
                </div>

                <p>In Memory of Mikeal Rogers: A Builder of Communities</p>
            </div>

        </div> : <p>No blog posts yet. Check back later</p>}
    </div>
}