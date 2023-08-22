import { useTheme } from '@emotion/react';
import BarChartOutlinedIcon from '@mui/icons-material/BarChartOutlined';
import CalendarTodayOutlinedIcon from '@mui/icons-material/CalendarTodayOutlined';
import { default as ChevronLeftIcon, default as ChevronRightIcon } from '@mui/icons-material/ChevronRight';
import ContactsOutlinedIcon from '@mui/icons-material/ContactsOutlined';
import HelpOutlineOutlinedIcon from '@mui/icons-material/HelpOutlineOutlined';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import MapOutlinedIcon from '@mui/icons-material/MapOutlined';
import PeopleOutlinedIcon from '@mui/icons-material/PeopleOutlined';
import PersonOutlinedIcon from '@mui/icons-material/PersonOutlined';
import PieChartOutlineOutlinedIcon from '@mui/icons-material/PieChartOutlineOutlined';
import ReceiptOutlinedIcon from '@mui/icons-material/ReceiptOutlined';
import TimelineOutlinedIcon from '@mui/icons-material/TimelineOutlined';
import { Box, IconButton, Stack, Typography } from '@mui/material';
import React, { useState } from 'react';
import { Menu, MenuItem, Sidebar as ProSidebar } from 'react-pro-sidebar';
import { Link } from 'react-router-dom';
import { colorTokens } from '../../theme';

const Item = ({ title, to, icon, selected, setSelected }) => {
  const theme = useTheme();
  const colors = colorTokens(theme.palette.mode);
  return (
    <MenuItem
      active={selected === title}
      onClick={() => setSelected(title)}
      icon={icon}
      component={<Link to={to} />}
    >
      <Typography>{title}</Typography>
    </MenuItem>
  );
};

const Sidebar = ({ isToggle, setIsToggle }) => {
  const theme = useTheme();
  const colors = colorTokens(theme.palette.mode);
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [selected, setSelected] = useState();

  return (
    <>
      <ProSidebar
        backgroundColor={colors.primary[400]}
        collapsed={isCollapsed}
        breakPoint='sm'
        onBackdropClick={() => setIsToggle(false)}
        toggled={isToggle}
      >
        <Menu
          menuItemStyles={{
            button: ({ level, active, disabled }) => {
              // only apply styles on first level elements of the tree
              if (level === 0)
                return {
                  color: colors.grey[100],
                  backgroundColor: active ? '#6870fa' : 'transparent',
                  ':hover': {
                    background: '#868dfb',
                  },
                };
            },
          }}
        >
          <Stack
            direction={'row'}
            alignItems={'center'}
            justifyContent={'space-between'}
            px={3}
            pt={2}
          >
            {!isCollapsed && (
              <Typography
                variant='h3'
                color='inherit'
                style={{
                  fontWeight: 'bold',
                  letterSpacing: '2px',
                  textTransform: 'uppercase',
                }}
              >
                VisualizeX
              </Typography>
            )}
            <IconButton
              aria-label='collapseMenu'
              onClick={() => setIsCollapsed((prev) => !prev)}
            >
              {!isCollapsed ? <ChevronLeftIcon /> : <ChevronRightIcon />}
            </IconButton>
          </Stack>

          {!isCollapsed && (
            <Stack
              mt={3}
              direction={'column'}
              alignItems={'center'}
              justifyContent={'center'}
            >
              <img
                style={{ width: '100px' }}
                src='public/images/user.png'
                alt=''
              />
              <Box textAlign='center'>
                <Typography
                  variant='h2'
                  color={colors.grey[100]}
                  fontWeight='bold'
                  sx={{ m: '10px 0 0 0' }}
                >
                  Ed Roh
                </Typography>
                <Typography variant='h5' color={colors.greenAccent[500]}>
                  VP Fancy Admin
                </Typography>
              </Box>
            </Stack>
          )}

          <Box py={isCollapsed ? 2 : 5}>
            <Item
              title='Dashboard'
              to='/dashboard'
              icon={<HomeOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />

            <Typography
              variant='h6'
              color={colors.grey[300]}
              sx={{ m: '15px 0 5px 20px' }}
            >
              Data
            </Typography>
            <Item
              title='Manage Team'
              to='/team'
              icon={<PeopleOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title='Contacts Information'
              to='/contacts'
              icon={<ContactsOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title='Invoices Balances'
              to='/invoices'
              icon={<ReceiptOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />

            <Typography
              variant='h6'
              color={colors.grey[300]}
              sx={{ m: '15px 0 5px 20px' }}
            >
              Pages
            </Typography>
            <Item
              title='Profile Form'
              to='/form'
              icon={<PersonOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title='Calendar'
              to='/calendar'
              icon={<CalendarTodayOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title='FAQ Page'
              to='/faq'
              icon={<HelpOutlineOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />

            <Typography
              variant='h6'
              color={colors.grey[300]}
              sx={{ m: '15px 0 5px 20px' }}
            >
              Charts
            </Typography>
            <Item
              title='Bar Chart'
              to='/bar'
              icon={<BarChartOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title='Pie Chart'
              to='/pie'
              icon={<PieChartOutlineOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title='Line Chart'
              to='/line'
              icon={<TimelineOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title='Geography Chart'
              to='/geography'
              icon={<MapOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
          </Box>
        </Menu>
      </ProSidebar>
    </>
  );
};

export default Sidebar;
