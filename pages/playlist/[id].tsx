import { validateToken } from "../../lib/auth";
import prisma from "../../lib/prisma";
import superjson from "superjson";
import GradientLayout from "../../components/gradientLayout";
import SongTable from "../../components/songsTable";

const getBGColor = (id) => {
  const colors = [
    "red",
    "green",
    "blue",
    "orange",
    "purple",
    "gray",
    "teal",
    "yellow",
  ];

  return colors[id - 1] || colors[Math.floor(Math.random() * colors.length)];
};

const Playlist = ({ playlistid }) => {
  const { json } = playlistid;
  const color = getBGColor(json.id);

  return (
    <GradientLayout
      color={color}
      roundImage={false}
      title={json.name}
      subtitle="playlist"
      description={`${json.songs.length} songs`}
      image={`https://picsum.photos/400?random=${json.id}`}
    >
      <SongTable songs={json.songs} />
    </GradientLayout>
  );
};

export const getServerSideProps = async ({ query, req }) => {
  let user;
  try {
    user = validateToken(req.cookies.MELODY_ACCESS_KEY);
  } catch (e) {
    return {
      redirect: {
        permanent: false,
        destination: "/signin",
      },
    };
  }

  const [playlist] = await prisma.playlist.findMany({
    where: {
      id: +query.id,
      userId: user.id,
    },
    include: {
      songs: {
        include: {
          artist: {
            select: {
              name: true,
              id: true,
            },
          },
        },
      },
    },
  });
  const playlistid = superjson.serialize(playlist);
  return {
    props: { playlistid },
  };
};
export default Playlist;
