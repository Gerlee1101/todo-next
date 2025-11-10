"use client";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import Image from "next/image";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useState } from "react";

export default function Home() {
  const [string, setString] = useState("");
  const [showString, setShowString] = useState(false);
  const onChangeString = (e) => {
    setString(e.target.string);
  };
  return (
    <div className="w-screen h-screen flex justify-center py-60">
      <Card className="rounded-[6px] w-fit h-fit">
        <div className="text-center text-black font-bold text-2xl">
          <CardHeader>
            <h1>To-Do List</h1>
          </CardHeader>
        </div>
        <div className="py-3">
          <CardContent>
            <div className="flex gap-3">
              <Input
                placeholder="Add a new task "
                value={string}
                onChange={onChangeString}
                className="h-10"
              ></Input>
              <Button className="bg-blue-500 h-10">Add</Button>
              {showString && <p>{string}</p>}
            </div>
            <Tabs defaultValue="All" className="w-[400px] py-4 ">
              <TabsList className="bg-transparent gap-2  ">
                <TabsTrigger value="All" className="bg-gray-200 ">
                  All
                </TabsTrigger>
                <TabsTrigger value="Active" className="bg-gray-200">
                  Active
                </TabsTrigger>
                <TabsTrigger value="Completed" className="bg-gray-200">
                  Completed
                </TabsTrigger>
              </TabsList>
              <TabsContent
                value="All"
                className="text-gray-500 py-[30px] text-center"
              >
                No tasks yet. Add one above!
              </TabsContent>
              <TabsContent value="Active">
                Change your password here.
              </TabsContent>
              <TabsContent value="Completed">
                Change your password here.
              </TabsContent>
            </Tabs>
          </CardContent>
        </div>
        <div>
          <CardFooter className="flex gap-2 justify-center">
            <p className="text-gray-500">Powered by</p>
            <a href="#" className="text-blue-500">
              Pinecone academy
            </a>
          </CardFooter>
        </div>
      </Card>
    </div>
  );
}
