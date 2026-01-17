import InstagramIcon from './icons/InstagramIcon';
import TelegramIcon from './icons/TelegramIcon';
import WhatsAppIcon from './icons/WhatsAppIcon';
import XIcon from './icons/XIcon';
import LiquidGlassButton from './LiquidGlassButton';

const SocialLinks = ({ socialLinks = {} }) => {
  const { instagram, telegram, whatsapp, x } = socialLinks;

  const socialIcons = [
    { name: 'instagram', icon: InstagramIcon, url: instagram },
    { name: 'telegram', icon: TelegramIcon, url: telegram },
    { name: 'whatsapp', icon: WhatsAppIcon, url: whatsapp },
    { name: 'x', icon: XIcon, url: x },
  ];

  return (
    <div>
      <span className="text-white-10 mb-3 flex text-sm">
        Social media
      </span>

      <div className="flex gap-3">

        {socialIcons.map(({ name, icon: Icon, url }) => (
          <LiquidGlassButton
            key={name}
            radius="full"
            width={36}
            height={36}
          >
            <Icon className="w-4 h-4" />
          </LiquidGlassButton>
        ))}
      </div>
    </div>
  );
};

export default SocialLinks;
