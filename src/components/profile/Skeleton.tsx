import React from "react";
import { Card, Skeleton } from "@nextui-org/react";

export default function ProfileSkeleton() {
  return (
    <Card className="bg-blue-50">
      <div className="container m-auto py-24">
        <div className="bg-white px-6 py-8 mb-4 shadow-md rounded-md border m-4 md:m-0">
          <h1 className="text-3xl font-bold mb-4">Your Profile</h1>
          <div className="flex flex-col md:flex-row">
            <div className="md:w-1/4 mx-20 mt-10">
              <div className="mb-4">
                <Skeleton className="h-32 w-32 md:h-48 md:w-48 rounded-full mx-auto md:mx-0" />
              </div>
              <Skeleton className="h-8 mb-4" />
              <Skeleton className="h-8 mb-4" />
            </div>

            <div className="md:w-3/4 md:pl-4">
              <h2 className="text-xl font-semibold mb-4">Your Listings</h2>
              <div className="mb-10">
                <Skeleton className="h-40 w-full rounded-md object-cover mb-4" />
                <Skeleton className="h-40 w-full rounded-md object-cover mb-4" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Card>
  );
}
