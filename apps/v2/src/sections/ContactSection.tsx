import { Divider, Grid, Typography } from '@mui/material';
import { contactsData } from '@packages/data';

function ContactSection() {
  return (
    <Grid>
      <Typography variant='h2'>Contacts</Typography>
      <Divider />
      <Grid sx={{ my: 2, width: '100%' }}>
        {contactsData.map((contact) => {
          const Icon = contact.icon;
          return (
            <Grid
              key={contact.label}
              container
              alignItems='center'
              mt={2}
              component='a'
              target='_blank'
              href={contact.link}
              sx={{ textDecoration: 'none', color: 'inherit' }}
            >
              {Icon && <Icon />}
              <Typography variant='body2' sx={{ ml: 2 }}>
                {contact.value}
              </Typography>
            </Grid>
          );
        })}
      </Grid>
    </Grid>
  );
}

export default ContactSection;
