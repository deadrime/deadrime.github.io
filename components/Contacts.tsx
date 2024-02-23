import classNames from 'classnames';
import SvgGithub from '@/svgComponents/Github';
import SvgTelegram from '@/svgComponents/Telegram';
import SvgHabr from '@/svgComponents/Habr';
import SvgEmail from '@/svgComponents/Email';


const Contacts: React.FC<{
  className?: string
}> = ({ className }) => {
  return (
    <div className={classNames('flex gap-3 items-center', className)}>
      <a href="https://github.com/deadrime" aria-label="github" target="_blank" className="text-lilac hover:text-text/60 transition-colors">
        <SvgGithub className="w-8 h-8" />
      </a>
      <a href="https://t.me/deadrime" aria-label="telegram" target="_blank" className="text-lilac hover:text-text/60 transition-colors">
        <SvgTelegram className="w-8 h-8" />
      </a>
      <a href="mailto:deadrime@yandex.ru" aria-label="email" target="_blank" className="text-lilac hover:text-text/60 transition-colors">
        <SvgEmail className="w-8 h-8" />
      </a>
      <a href="https://career.habr.com/deadrime" aria-label="habr career" target="_blank" className="text-lilac hover:text-text/60 transition-colors">
        <SvgHabr className="w-8 h-8" />
      </a>
    </div>
  )
}

export default Contacts;
