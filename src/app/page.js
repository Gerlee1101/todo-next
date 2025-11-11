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
import { Checkbox } from "@/components/ui/checkbox";
import { nanoid } from "nanoid";
export default function Todo() {
  const [value, setValue] = useState("");
  const [showString, setShowString] = useState([]);
  console.log(showString);
  const onChangeString = (e) => {
    setValue(e.target.value);
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
                value={value}
                onChange={onChangeString}
                className="h-10 "
              ></Input>
              <Button
                variant="default: bg-primary text-primary-foreground hover:bg-primary/90"
                className="bg-blue-500 h-10 cursor-pointer text-white"
                onClick={() => {
                  setShowString([
                    ...showString,
                    {
                      id: nanoid,
                      isDone: false,
                      text: value,
                    },
                  ]);
                  setValue("");
                }}
              >
                Add
              </Button>
            </div>
            <Tabs defaultValue="All" className="w-[400px] py-4 ">
              <TabsList className="bg-transparent gap-2  ">
                <TabsTrigger
                  value="All"
                  className={
                    "bg-gray-200 data-[state=active]:bg-blue-500 data-[state=active]:text-white text-black h-8"
                  }
                >
                  All
                </TabsTrigger>
                <TabsTrigger
                  value="Active"
                  className="bg-gray-200  data-[state=active]:bg-blue-500 data-[state=active]:text-white text-black h-8"
                >
                  Active
                </TabsTrigger>
                <TabsTrigger
                  value="Completed"
                  className="bg-gray-200  data-[state=active]:bg-blue-500  data-[state=active]:text-white text-black h-8"
                >
                  Completed
                </TabsTrigger>
              </TabsList>
              <TabsContent
                value="All"
                className="text-gray-500 py-[30px] text-center "
              >
                No tasks yet. Add one above!
              </TabsContent>
              <TabsContent
                value="All"
                className="text-black py-[30px] flex flex-col gap-4"
              >
                {showString.map((item) => (
                  <Card
                    key={item.id}
                    className="bg-gray-50 border-none rounded-none"
                  >
                    <CardContent className="flex gap4 items-center">
                      <Checkbox
                        className="w-6 h-6 rounded-[5px]"
                        onClick={() => {
                          const newshowString = showString.map((string) => {
                            if (string.id !== item.id) return string;
                            return {
                              isDone: !item.isDone,
                              text: item.text,
                              id: item.id,
                            };
                          });
                          setShowString(newshowString);
                        }}
                      />
                      <p className="flex-1 p-2">{item.text}</p>

                      <Button className="bg-red-600">Delete</Button>
                    </CardContent>
                  </Card>
                ))}
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
