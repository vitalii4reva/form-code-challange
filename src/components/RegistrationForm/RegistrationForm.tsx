import {
  Box,
  Button,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Grid,
  GridItem,
  Input,
  InputGroup,
  Spinner,
  Text,
  useDisclosure,
  useToast,
} from '@chakra-ui/react';
import { useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';

import SuccessModal from '../SuccessModal/SuccessModal';
import passwordValidation, { PasswordValidationResult } from './passwordValidation';
import Requirement from './Requirement';

type FormData = {
  email: string;
  password: string;
};

const RegistrationForm = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { register, handleSubmit, formState, reset } = useForm<FormData>({
    mode: 'onChange',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [passwordRequirements, setPasswordRequirements] =
    useState<PasswordValidationResult>({
      isValid: false,
      requirements: {
        minLength: false,
        hasLowercase: false,
        hasUppercase: false,
        hasNumber: false,
        hasSpecialChar: false,
      },
    });
  const toast = useToast();

  const onSubmit: SubmitHandler<FormData> = async (data) => {
    try {
      setIsSubmitting(true);
      // Some kind of API call 😊
      await new Promise((resolve, reject) => setTimeout(reject, 2000));
      console.log(data);
      onOpen();
    } catch (error) {
      toast({
        title: 'An error occurred',
        description: 'Some Error Message', // in real life error.message 😊
        status: 'error',
        duration: 5000,
        isClosable: true,
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleModalClose = () => {
    onClose();
    reset();
  };

  const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    const validationResult = passwordValidation(value);
    setPasswordRequirements(validationResult);
  };

  const showRequirements = !passwordRequirements.isValid;

  return (
    <Box mt="5">
      <form onSubmit={handleSubmit(onSubmit)}>
        <Grid
          templateColumns={{
            base: 'repeat(1, 1fr)',
            md: 'repeat(2, 1fr)',
          }}
          gap={4}
        >
          <GridItem>
            <FormControl id="email" isInvalid={!!formState.errors.email}>
              <FormLabel>Email</FormLabel>
              <Input
                type="email"
                {...register('email', { required: 'Email is required' })}
              />
              <FormErrorMessage>{formState.errors.email?.message}</FormErrorMessage>
            </FormControl>
          </GridItem>
          <GridItem>
            <FormControl id="password" isInvalid={!!formState.errors.password}>
              <FormLabel>Password</FormLabel>
              <InputGroup>
                <Input
                  type="password"
                  {...register('password', {
                    required: 'Password is required',
                    validate: (value) => passwordValidation(value).isValid,
                  })}
                  onChange={handlePasswordChange}
                />
              </InputGroup>
              <FormErrorMessage>{formState.errors.password?.message}</FormErrorMessage>
            </FormControl>
            {showRequirements && (
              <Box mt={2} ml={2}>
                <Text mb={1} fontWeight="bold">
                  Password requirements:
                </Text>
                <Requirement
                  label="At least 8 characters"
                  isValid={passwordRequirements.requirements.minLength}
                />
                <Requirement
                  label="At least 1 lowercase character"
                  isValid={passwordRequirements.requirements.hasLowercase}
                />
                <Requirement
                  label="At least 1 uppercase character"
                  isValid={passwordRequirements.requirements.hasUppercase}
                />
                <Requirement
                  label="At least 1 number"
                  isValid={passwordRequirements.requirements.hasNumber}
                />
                <Requirement
                  label="At least 1 special character"
                  isValid={passwordRequirements.requirements.hasSpecialChar}
                />
              </Box>
            )}
            {!showRequirements && (
              <Text display="flex" alignItems="center" mt={2} ml={2}>
                Wonderful password!
              </Text>
            )}
            <Button
              mt={4}
              colorScheme="teal"
              w="100%"
              type="submit"
              isDisabled={!formState.isValid}
            >
              {isSubmitting ? <Spinner mr={2} /> : null}
              Submit
            </Button>
          </GridItem>
        </Grid>
      </form>
      <SuccessModal isOpen={isOpen} onClose={handleModalClose} />
    </Box>
  );
};

export default RegistrationForm;
