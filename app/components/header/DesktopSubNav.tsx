import { Box, Text, Stack, Link } from '@chakra-ui/react';

import { iNavItem } from '@/app/interface/constants/header';

const DesktopSubNav = ({ label, href }: iNavItem) => {
  return (
    <Link href={href} role={'group'} display={'block'} p={2} rounded={'md'}>
      <Stack direction={'row'} align={'center'}>
        <Box>
          <Text fontWeight={500}>{label}</Text>
        </Box>
      </Stack>
    </Link>
  );
};

export default DesktopSubNav;
