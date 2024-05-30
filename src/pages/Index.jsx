import { Container, Text, VStack, Box, Flex } from "@chakra-ui/react";

const Index = () => {
  return (
    <Container maxW="container.xl" p={4}>
      <Flex direction={{ base: "column", md: "row" }} justify="space-between">
        <Box flex="3" p={4}>
          <Text fontSize="2xl" mb={4}>Latest News</Text>
          <VStack spacing={4} align="stretch">
            <Box p={4} shadow="md" borderWidth="1px">
              <Text fontWeight="bold">News Article 1</Text>
              <Text mt={2}>Summary of the news article...</Text>
            </Box>
            <Box p={4} shadow="md" borderWidth="1px">
              <Text fontWeight="bold">News Article 2</Text>
              <Text mt={2}>Summary of the news article...</Text>
            </Box>
            <Box p={4} shadow="md" borderWidth="1px">
              <Text fontWeight="bold">News Article 3</Text>
              <Text mt={2}>Summary of the news article...</Text>
            </Box>
          </VStack>
        </Box>
        <Box flex="1" p={4} bg="gray.100" ml={{ md: 4 }} mt={{ base: 4, md: 0 }}>
          <Text fontSize="2xl" mb={4}>Market Updates</Text>
          <VStack spacing={4} align="stretch">
            <Box p={4} shadow="md" borderWidth="1px">
              <Text fontWeight="bold">Market Data 1</Text>
              <Text mt={2}>Details about the market data...</Text>
            </Box>
            <Box p={4} shadow="md" borderWidth="1px">
              <Text fontWeight="bold">Market Data 2</Text>
              <Text mt={2}>Details about the market data...</Text>
            </Box>
          </VStack>
        </Box>
      </Flex>
    </Container>
  );
};

export default Index;