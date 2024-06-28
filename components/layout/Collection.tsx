import { getCollections } from "@/lib/action";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Collection = async () => {
  const collections = await getCollections();
  return (
    <div>
      <p className="text-4xl text-center font-semibold mt-12 mb-12">
        Collections
      </p>
      <div className="flex justify-center m-auto flex-wrap gap-6">
        {collections.map((collection: CollectionType) => (
          <Link href={`/collections/${collection._id}`} key={collection._id}>
            <Image
              src={collection.image}
              width={350}
              height={450}
              className="rounded-lg object-cover"
              alt="hello"
            />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Collection;
