import { CheckIcon, CloseIcon } from '@chakra-ui/icons';
import { Text } from '@chakra-ui/react';

const Requirement = ({ label, isValid }: { label: string; isValid: boolean }) => (
  <Text display="flex" alignItems="center" color={isValid ? 'green.500' : 'red.500'}>
    {isValid ? <CheckIcon mr={1} /> : <CloseIcon mr={1} />}
    {label}
  </Text>
);

export default Requirement;
