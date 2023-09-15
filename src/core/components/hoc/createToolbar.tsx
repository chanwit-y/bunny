import { BoxProps, ToolbarProps } from '@mui/material';
import { ComponentType } from 'react';

export type CreateToolbarProps = {
  start: JSX.Element;
  end: JSX.Element;
};

export const createToolbar = <P extends CreateToolbarProps>(
  Toolbar: ComponentType<ToolbarProps>,
  Box: ComponentType<BoxProps>
) => {
  return (props: P & CreateToolbarProps) => {
    const { start, end } = props;

    return (
      <Toolbar>
        <Box
          display="flex"
          justifyContent="space-between"
          flexGrow={1}
          py={1}
          mx={1}
          color="black"
        >
          <Box
            display="flex"
            flexDirection="row"
            justifyContent="start"
            alignItems="center"
          >
            {start}
            {/* <IconButton color="inherit" sx={{ ml: -1.2 }} onClick={() => {}}>
              <MenuIcon  />
            </IconButton> */}
          </Box>
          <Box
            display="flex"
            flexDirection="row"
            justifyContent="end"
            alignItems="center"
          >
            {end}
            {/* <Divider orientation="vertical" />
            <ProfileAvatar src={profilePicture} />
            <Box display="flex" alignItems="center">
              <Typography variant="subtitle2" ml={1} mr={0.5}>
                {`${firstName} ${lastName}`}
              </Typography>
              <ArrowPopover>
                <Box
                  display="flex"
                  px={1}
                  alignItems="center"
                  justifyContent="space-between"
                  width={350}
                  height={50}
                >
                  <Typography
                    variant="body2"
                    letterSpacing={1}
                    fontWeight={700}
                  >
                    Banpu Public Company Limited
                  </Typography>
                  <IconButton onClick={() => logout()}>
                    <LoginIcon />
                  </IconButton>
                </Box>
                <Box
                  bgcolor={grey[100]}
                  display="flex"
                  justifyContent="start"
                  alignItems="center"
                  height={70}
                >
                  <ProfileAvatar
                    marginLeft={20}
                    size={50}
                    src={profilePicture}
                  />
                  <Box mx={1}>
                    <Typography variant="body1">xxx</Typography>
                    <Typography fontSize={12}>xxxx</Typography>
                  </Box>
                </Box>
              </ArrowPopover>
            </Box> */}
          </Box>
        </Box>
      </Toolbar>
    );
  };
};
