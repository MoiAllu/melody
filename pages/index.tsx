import { Image } from "@chakra-ui/react";
import GradientLayout from "../components/gradientLayout";
import prisma from "../lib/prisma";
import superjson from "superjson";
import { Box, Text, Flex } from "@chakra-ui/react";
import { useMe } from "../lib/hooks";

const Home = ({ artists }) => {
  const { json } = artists;
  const { user } = useMe();
  return (
    <GradientLayout
      color="yellow"
      subtitle="Profile"
      title={`${user?.firstname} ${user?.lastname}`}
      description={`${user?.playlistsCount} total public playlists`}
      roundImage
      image="/profile.jpg"
    >
      <Box color="white" paddingX="40px">
        <Box marginBottom="40px">
          <Text fontSize="2xl" fontWeight="bold">
            Top artist this month
          </Text>
          <Text fontSize="md">only visible to you</Text>
        </Box>
        <Flex>
          {json.map((artist) => (
            <Box paddingX="10px" width="20%" key={artist.id}>
              <Box bg="gray.900" borderRadius="4px" padding="15px" width="100%">
                <Image
                  src={`https://picsum.photos/400?random=${artist.id}`}
                  borderRadius="100%"
                />
                <Box marginTop="20px">
                  <Text fontSize="large">{artist.name}</Text>
                  <Text fontSize="x-small">Artist</Text>
                </Box>
              </Box>
            </Box>
          ))}
        </Flex>
      </Box>
    </GradientLayout>
  );
};
export const getServerSideProps = async () => {
  const artistsData = await prisma.artist.findMany({});
  const artists = superjson.serialize(artistsData);
  return {
    props: { artists },
  };
};
export default Home;
