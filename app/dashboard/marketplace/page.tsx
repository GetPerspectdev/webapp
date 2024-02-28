/**
 * v0 by Vercel.
 * @see https://v0.dev/t/kovIBSeq2q7
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import Link from "next/link"

export default function Component() {
  return (
    <div className="grid grid-cols-1 gap-6 p-4 sm:grid-cols-2 md:grid-cols-3 md:p-6 lg:grid-cols-4">
      <div className="group relative overflow-hidden rounded-lg shadow-lg transition-transform duration-300 ease-in-out hover:-translate-y-2 hover:shadow-xl">
        <Link className="absolute inset-0 z-10" href="#">
          <span className="sr-only">View NFT</span>
        </Link>
        <img
          alt="NFT 1"
          className="h-64 w-full object-cover"
          height={500}
          src="/images/MintCity.svg"
          style={{
            aspectRatio: "500/500",
            objectFit: "cover",
          }}
          width={500}
        />
        <div className="bg-accent p-4">
          <h3 className="text-xl font-bold">NFT Title 1</h3>
          <h4 className="text-lg font-semibold md:text-xl">0.25 ETH</h4>
        </div>
      </div>
      <div className="group relative overflow-hidden rounded-lg shadow-lg transition-transform duration-300 ease-in-out hover:-translate-y-2 hover:shadow-xl">
        <Link className="absolute inset-0 z-10" href="#">
          <span className="sr-only">View NFT</span>
        </Link>
        <img
          alt="NFT 2"
          className="h-64 w-full object-cover"
          height={500}
          src="/placeholder.svg"
          style={{
            aspectRatio: "500/500",
            objectFit: "cover",
          }}
          width={500}
        />
        <div className="bg-accent p-4">
          <h3 className="text-xl font-bold">NFT Title 2</h3>
          <h4 className="text-lg font-semibold md:text-xl">0.5 ETH</h4>
        </div>
      </div>
      <div className="group relative overflow-hidden rounded-lg shadow-lg transition-transform duration-300 ease-in-out hover:-translate-y-2 hover:shadow-xl">
        <Link className="absolute inset-0 z-10" href="#">
          <span className="sr-only">View NFT</span>
        </Link>
        <img
          alt="NFT 3"
          className="h-64 w-full object-cover"
          height={500}
          src="/placeholder.svg"
          style={{
            aspectRatio: "500/500",
            objectFit: "cover",
          }}
          width={500}
        />
        <div className="bg-accent p-4">
          <h3 className="text-xl font-bold">NFT Title 3</h3>
          <h4 className="text-lg font-semibold md:text-xl">1 ETH</h4>
        </div>
      </div>
      <div className="group relative overflow-hidden rounded-lg shadow-lg transition-transform duration-300 ease-in-out hover:-translate-y-2 hover:shadow-xl">
        <Link className="absolute inset-0 z-10" href="#">
          <span className="sr-only">View NFT</span>
        </Link>
        <img
          alt="NFT 4"
          className="h-64 w-full object-cover"
          height={500}
          src="/images/MintAvatar.svg"
          style={{
            aspectRatio: "500/500",
            objectFit: "cover",
          }}
          width={500}
        />
        <div className="bg-accent p-4">
          <h3 className="text-xl font-bold">Avatar</h3>
          <h4 className="text-lg md:text-lg">300 pts</h4>
        </div>
      </div>
    </div>
  )
}