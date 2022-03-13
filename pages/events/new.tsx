import {
  Box,
  Button,
  Center,
  Divider,
  FormControl,
  FormLabel,
  Input,
  Textarea,
  VStack,
} from "@chakra-ui/react";
import { DatePicker } from "@mantine/dates";
import type { NextPage } from "next";
import { Controller, useForm } from "react-hook-form";
import { CreateEvent, createEvent } from "../../services/apiService";

const New: NextPage = () => {
  const { register, control, handleSubmit } = useForm<CreateEvent>();

  const onSubmit = async (data: CreateEvent) => {
    await createEvent(data);
  };

  return (
    <Center>
      <VStack
        maxW="640px"
        as="form"
        spacing="16px"
        onSubmit={handleSubmit(onSubmit)}
      >
        <FormControl>
          <FormLabel htmlFor="name">Event name</FormLabel>
          <Input {...register("name")} />
        </FormControl>
        <FormControl>
          <FormLabel htmlFor="description">Event description</FormLabel>
          <Textarea {...register("description")} />
        </FormControl>
        <FormControl>
          <FormLabel htmlFor="date">Event day</FormLabel>
          <Controller
            control={control}
            name="date"
            render={({ field: { onChange, ...fields } }) => (
              <DatePicker onChange={onChange} {...fields} />
            )}
          />
        </FormControl>
        <Divider color="gray.300" />
        <Button type="submit" colorScheme="blue" isFullWidth>
          Add event
        </Button>
      </VStack>
    </Center>
  );
};

export default New;
