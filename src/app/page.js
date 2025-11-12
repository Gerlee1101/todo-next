"use client";
import { Button, buttonVariants } from "@/components/ui/button";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
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
  const handleDelete = (id) => {
    const newList = showString.filter((item) => item.id !== id);
    setShowString(newList);
  };
  console.log(showString);
  const onChangeString = (e) => {
    setValue(e.target.value);
  };
  return (
    <div className="w-screen h-screen flex justify-center py-60 overflow-y-auto">
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
                      id: nanoid(),
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
                className="text-black py-4 flex flex-col gap-4"
              >
                {showString.map((item) => (
                  <Card
                    className="bg-gray-50 border-none rounded-none"
                    key={item.id}
                  >
                    <CardContent className="flex gap4 items-center">
                      <Checkbox
                        className="w-6 h-6 rounded-[5px]"
                        checked={item.isDone}
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

                      <Button
                        variant="default: bg-primary text-primary-foreground hover:bg-primary/90"
                        className="bg-red-50 h-10 cursor-pointer text-red-500"
                        onClick={() => handleDelete(item.id)}
                      >
                        Delete
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </TabsContent>
              <TabsContent value="Active" className="flex flex-col gap-4 py-4">
                {showString
                  .filter((item) => !item.isDone)
                  .map((item) => (
                    <Card
                      key={item.id}
                      className="bg-gray-50 border-none rounded-none"
                    >
                      <CardContent className="flex gap-4 items-center">
                        <Checkbox
                          className="w-6 h-6 rounded-[5px]"
                          checked={item.isDone}
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
                        <AlertDialog>
                          <AlertDialogTrigger asChild>
                            <Button
                              variant="default: bg-primary text-primary-foreground hover:bg-primary/90"
                              className="bg-red-50 h-10 cursor-pointer text-red-500"
                              onClick={() => handleDelete(item.id)}
                            >
                              Delete
                            </Button>
                          </AlertDialogTrigger>
                          <AlertDialogContent>
                            <AlertDialogHeader>
                              <AlertDialogTitle>
                                Are you absolutely sure?
                              </AlertDialogTitle>
                              <AlertDialogDescription>
                                This action cannot be undone. This will
                                permanently delete your account and remove your
                                data from our servers.
                              </AlertDialogDescription>
                            </AlertDialogHeader>
                            <AlertDialogFooter>
                              <AlertDialogCancel>Cancel</AlertDialogCancel>
                              <AlertDialogAction>Continue</AlertDialogAction>
                            </AlertDialogFooter>
                          </AlertDialogContent>
                        </AlertDialog>
                      </CardContent>
                    </Card>
                  ))}
              </TabsContent>
              <TabsContent
                value="Completed"
                className="flex flex-col gap-4 py-4"
              >
                {showString
                  .filter((item) => item.isDone)
                  .map((item) => (
                    <Card
                      key={item.id}
                      className="bg-gray-50 border-none rounded-none"
                    >
                      <CardContent className="flex gap-4 items-center">
                        <Checkbox
                          className="w-6 h-6 rounded-[5px]"
                          checked={item.isDone}
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
                        <AlertDialog>
                          <AlertDialogTrigger asChild>
                            <Button
                              variant="default: bg-primary text-primary-foreground hover:bg-primary/90"
                              className="bg-red-50 h-10 cursor-pointer text-red-500"
                              onClick={() => handleDelete(item.id)}
                            >
                              Delete
                            </Button>
                          </AlertDialogTrigger>
                          <AlertDialogContent>
                            <AlertDialogHeader>
                              <AlertDialogTitle>
                                Are you absolutely sure?
                              </AlertDialogTitle>
                              <AlertDialogDescription>
                                This action cannot be undone. This will
                                permanently delete your account and remove your
                                data from our servers.
                              </AlertDialogDescription>
                            </AlertDialogHeader>
                            <AlertDialogFooter>
                              <AlertDialogCancel>Cancel</AlertDialogCancel>
                              <AlertDialogAction>Continue</AlertDialogAction>
                            </AlertDialogFooter>
                          </AlertDialogContent>
                        </AlertDialog>
                      </CardContent>
                    </Card>
                  ))}
              </TabsContent>
              {showString.length !== 0 ? (
                <div className="w-sm border-t border-gray-200 flex justify-between py-2">
                  <p className="text-gray-500  mb-4 font-medium py-1.5">
                    {showString.filter((item) => item.isDone).length} of{" "}
                    {showString.length} tasks completed
                  </p>
                  <AlertDialog>
                    <AlertDialogTrigger asChild>
                      <Button
                        variant="default: bg-primary text-primary-foreground hover:bg-primary/90"
                        className="bg-transparent cursor-pointer text-red-500"
                        onClick={() => {
                          const newList = showString.filter(
                            (item) => !item.isDone
                          );
                          setShowString(newList);
                        }}
                      >
                        Clear Completed
                      </Button>
                    </AlertDialogTrigger>
                    <AlertDialogContent>
                      <AlertDialogHeader>
                        <AlertDialogTitle>
                          Are you absolutely sure?
                        </AlertDialogTitle>
                        <AlertDialogDescription>
                          Are you sure you want to clear all completed tasks?
                        </AlertDialogDescription>
                      </AlertDialogHeader>
                      <AlertDialogFooter>
                        <AlertDialogCancel>Cancel</AlertDialogCancel>
                        <AlertDialogAction>Ok</AlertDialogAction>
                      </AlertDialogFooter>
                    </AlertDialogContent>
                  </AlertDialog>
                </div>
              ) : (
                <p className="text-gray-500 w-sm text-center mt-4  font-medium">
                  No tasks yet. Add one above!
                </p>
              )}
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
