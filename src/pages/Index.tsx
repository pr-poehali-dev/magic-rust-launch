import { useState } from 'react';
import Icon from '@/components/ui/icon';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';

const HERO_IMG = 'https://cdn.poehali.dev/projects/70457841-d076-4344-bb03-2107a7f9498a/files/83d518e8-12b7-4245-a1ea-1dac3a734103.jpg';

const navItems = [
  { label: 'Главная', href: '#home' },
  { label: 'Игры', href: '#games' },
  { label: 'Профиль', href: '#profile' },
  { label: 'Рейтинг', href: '#rating' },
  { label: 'О платформе', href: '#about' },
  { label: 'Контакты', href: '#contacts' },
];

const stats = [
  { value: '128K', label: 'Игроков', icon: 'Users' },
  { value: '540+', label: 'Турниров', icon: 'Trophy' },
  { value: '2.4M', label: 'Достижений', icon: 'Award' },
  { value: '99.9%', label: 'Аптайм', icon: 'Activity' },
];

const games = [
  { title: 'Astral Siege', genre: 'Стратегия', players: '24.5K', rating: 4.9, color: 'from-purple-600 to-fuchsia-600' },
  { title: 'Neon Drift', genre: 'Гонки', players: '18.2K', rating: 4.7, color: 'from-violet-600 to-purple-700' },
  { title: 'Shadow Realm', genre: 'RPG', players: '31.8K', rating: 4.8, color: 'from-indigo-600 to-violet-600' },
  { title: 'Pulse Arena', genre: 'Шутер', players: '42.1K', rating: 5.0, color: 'from-fuchsia-600 to-purple-600' },
  { title: 'Crystal Quest', genre: 'Приключение', players: '9.4K', rating: 4.6, color: 'from-purple-700 to-indigo-600' },
  { title: 'Vortex Online', genre: 'MMO', players: '56.3K', rating: 4.9, color: 'from-violet-700 to-fuchsia-700' },
];

const achievements = [
  { name: 'Победы', value: 847, max: 1000, icon: 'Swords', color: 'bg-purple-500' },
  { name: 'Турниры', value: 23, max: 30, icon: 'Trophy', color: 'bg-fuchsia-500' },
  { name: 'Опыт', value: 92, max: 100, icon: 'Zap', color: 'bg-violet-500' },
  { name: 'Дружба', value: 156, max: 200, icon: 'Heart', color: 'bg-indigo-500' },
];

const ratingPlayers = [
  { rank: 1, name: 'NightHawk', score: 98420, badge: 'Легенда', country: '🇷🇺' },
  { rank: 2, name: 'PhantomX', score: 96150, badge: 'Мастер', country: '🇩🇪' },
  { rank: 3, name: 'IronWolf', score: 94800, badge: 'Мастер', country: '🇺🇸' },
  { rank: 4, name: 'StarFall', score: 91230, badge: 'Эксперт', country: '🇫🇷' },
  { rank: 5, name: 'VoidQueen', score: 89740, badge: 'Эксперт', country: '🇯🇵' },
];

const Index = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-xl bg-background/70 border-b border-border">
        <div className="container flex items-center justify-between h-16">
          <a href="#home" className="flex items-center gap-2">
            <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center glow-purple">
              <Icon name="Flame" size={20} className="text-white" />
            </div>
            <span className="font-display text-xl font-bold tracking-wide">
              Phoenix<span className="text-gradient">Play</span>
            </span>
          </a>

          <nav className="hidden md:flex items-center gap-7">
            {navItems.map((item) => (
              <a key={item.href} href={item.href} className="text-sm text-muted-foreground hover:text-foreground transition-colors font-medium">
                {item.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <Button className="hidden sm:flex bg-gradient-to-r from-primary to-accent hover:opacity-90 text-white font-medium glow-purple">
              Войти
            </Button>
            <button className="md:hidden text-foreground" onClick={() => setMenuOpen(!menuOpen)}>
              <Icon name={menuOpen ? 'X' : 'Menu'} size={24} />
            </button>
          </div>
        </div>
        {menuOpen && (
          <nav className="md:hidden border-t border-border bg-background/95 backdrop-blur-xl animate-fade-in">
            <div className="container py-4 flex flex-col gap-3">
              {navItems.map((item) => (
                <a key={item.href} href={item.href} onClick={() => setMenuOpen(false)} className="text-muted-foreground hover:text-foreground transition-colors py-1">
                  {item.label}
                </a>
              ))}
            </div>
          </nav>
        )}
      </header>

      {/* Hero */}
      <section id="home" className="relative pt-32 pb-24 grid-pattern">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/50 to-background pointer-events-none" />
        <div className="absolute top-1/4 -left-20 w-96 h-96 bg-primary/30 rounded-full blur-[120px] animate-pulse-glow pointer-events-none" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent/20 rounded-full blur-[120px] animate-pulse-glow pointer-events-none" />

        <div className="container relative grid lg:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-in">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-primary/40 bg-primary/10 text-sm text-silver mb-6">
              <Icon name="Sparkles" size={14} className="text-primary" />
              Премиальная игровая платформа
            </span>
            <h1 className="font-display text-5xl md:text-7xl font-bold leading-[1.05] mb-6">
              Восстань из пепла к <span className="text-gradient glow-text">вершинам</span> рейтинга
            </h1>
            <p className="text-lg text-muted-foreground max-w-md mb-8">
              PhoenixPlay — детальная статистика достижений, прогресс каждого игрока и арена для настоящих чемпионов.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button size="lg" className="bg-gradient-to-r from-primary to-accent hover:opacity-90 text-white font-semibold glow-purple">
                <Icon name="Play" size={18} className="mr-2" />
                Начать играть
              </Button>
              <Button size="lg" variant="outline" className="border-border bg-secondary/40 hover:bg-secondary text-foreground">
                Смотреть турниры
              </Button>
            </div>
          </div>

          <div className="relative animate-scale-in">
            <div className="absolute inset-0 bg-primary/30 blur-[80px] rounded-full" />
            <img src={HERO_IMG} alt="Phoenix" className="relative rounded-3xl border border-primary/30 glow-purple animate-float w-full object-cover aspect-square" />
          </div>
        </div>

        {/* Stats bar */}
        <div className="container relative mt-16">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {stats.map((s) => (
              <div key={s.label} className="rounded-2xl border border-border bg-card/60 backdrop-blur p-5 text-center card-hover">
                <Icon name={s.icon} size={24} className="mx-auto mb-2 text-primary" />
                <div className="font-display text-3xl font-bold text-silver">{s.value}</div>
                <div className="text-sm text-muted-foreground">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Games */}
      <section id="games" className="py-24 relative">
        <div className="container">
          <SectionHeader badge="Каталог" title="Популярные игры" subtitle="Выбирай свою арену и поднимайся в рейтинге" />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {games.map((g) => (
              <div key={g.title} className="group rounded-2xl border border-border bg-card overflow-hidden card-hover">
                <div className={`h-40 bg-gradient-to-br ${g.color} relative flex items-center justify-center`}>
                  <Icon name="Gamepad2" size={56} className="text-white/90 group-hover:scale-110 transition-transform" />
                  <span className="absolute top-3 right-3 px-2.5 py-1 rounded-full bg-black/40 backdrop-blur text-xs text-white flex items-center gap-1">
                    <Icon name="Star" size={12} className="text-yellow-400" /> {g.rating}
                  </span>
                </div>
                <div className="p-5">
                  <div className="text-xs text-primary font-medium mb-1">{g.genre}</div>
                  <h3 className="font-display text-xl font-semibold mb-3">{g.title}</h3>
                  <div className="flex items-center justify-between text-sm text-muted-foreground">
                    <span className="flex items-center gap-1.5"><Icon name="Users" size={14} /> {g.players} онлайн</span>
                    <Icon name="ChevronRight" size={18} className="text-primary group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Profile / Achievements */}
      <section id="profile" className="py-24 relative grid-pattern">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-transparent to-background pointer-events-none" />
        <div className="container relative">
          <SectionHeader badge="Профиль" title="Статистика достижений" subtitle="Отслеживай прогресс по каждому показателю в реальном времени" />
          <div className="grid lg:grid-cols-3 gap-6">
            {/* Player card */}
            <div className="rounded-2xl border border-primary/30 bg-card p-6 glow-purple">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-accent flex items-center justify-center font-display text-2xl font-bold text-white">
                  NX
                </div>
                <div>
                  <h3 className="font-display text-2xl font-bold">NightHawk</h3>
                  <span className="text-sm text-silver flex items-center gap-1">
                    <Icon name="Crown" size={14} className="text-yellow-400" /> Легенда · Ур. 87
                  </span>
                </div>
              </div>
              <div className="space-y-3">
                <ProfileRow label="Рейтинг" value="#1 в мире" />
                <ProfileRow label="Винрейт" value="84%" />
                <ProfileRow label="Часов в игре" value="3 240" />
                <ProfileRow label="Сезон" value="Платина IV" />
              </div>
            </div>

            {/* Achievements progress */}
            <div className="lg:col-span-2 rounded-2xl border border-border bg-card p-6">
              <h3 className="font-display text-xl font-semibold mb-6 flex items-center gap-2">
                <Icon name="TrendingUp" size={20} className="text-primary" /> Прогресс достижений
              </h3>
              <div className="grid sm:grid-cols-2 gap-6">
                {achievements.map((a) => (
                  <div key={a.name}>
                    <div className="flex items-center justify-between mb-2">
                      <span className="flex items-center gap-2 text-sm font-medium">
                        <Icon name={a.icon} size={16} className="text-primary" /> {a.name}
                      </span>
                      <span className="text-sm text-silver font-display">{a.value}/{a.max}</span>
                    </div>
                    <Progress value={(a.value / a.max) * 100} className="h-2 bg-secondary" />
                  </div>
                ))}
              </div>
              <div className="grid grid-cols-3 gap-4 mt-8 pt-6 border-t border-border">
                {[
                  { n: 'Серия побед', v: '17' },
                  { n: 'Лучший ранг', v: '#1' },
                  { n: 'Медалей', v: '64' },
                ].map((x) => (
                  <div key={x.n} className="text-center">
                    <div className="font-display text-2xl font-bold text-gradient">{x.v}</div>
                    <div className="text-xs text-muted-foreground">{x.n}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Rating */}
      <section id="rating" className="py-24">
        <div className="container">
          <SectionHeader badge="Лидерборд" title="Топ игроков" subtitle="Сильнейшие чемпионы текущего сезона" />
          <div className="max-w-3xl mx-auto rounded-2xl border border-border bg-card overflow-hidden">
            {ratingPlayers.map((p, i) => (
              <div key={p.rank} className={`flex items-center gap-4 px-6 py-4 transition-colors hover:bg-secondary/40 ${i !== ratingPlayers.length - 1 ? 'border-b border-border' : ''}`}>
                <div className={`w-9 h-9 rounded-lg flex items-center justify-center font-display font-bold ${p.rank <= 3 ? 'bg-gradient-to-br from-primary to-accent text-white' : 'bg-secondary text-silver'}`}>
                  {p.rank}
                </div>
                <span className="text-2xl">{p.country}</span>
                <div className="flex-1">
                  <div className="font-semibold">{p.name}</div>
                  <div className="text-xs text-primary">{p.badge}</div>
                </div>
                <div className="font-display text-lg font-bold text-silver">{p.score.toLocaleString('ru')}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="py-24 relative grid-pattern">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-transparent to-background pointer-events-none" />
        <div className="container relative">
          <SectionHeader badge="О платформе" title="Почему PhoenixPlay" subtitle="Создано для тех, кто стремится к вершине" />
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { icon: 'BarChart3', title: 'Глубокая аналитика', text: 'Детальная статистика каждого матча, достижения и динамика прогресса.' },
              { icon: 'ShieldCheck', title: 'Честная игра', text: 'Античит-система и прозрачный рейтинг без читеров и накруток.' },
              { icon: 'Rocket', title: 'Турниры', text: 'Ежедневные соревнования с призами и путь от новичка до легенды.' },
            ].map((f) => (
              <div key={f.title} className="rounded-2xl border border-border bg-card p-7 card-hover">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center mb-5 glow-purple">
                  <Icon name={f.icon} size={24} className="text-white" />
                </div>
                <h3 className="font-display text-xl font-semibold mb-2">{f.title}</h3>
                <p className="text-muted-foreground text-sm">{f.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contacts */}
      <section id="contacts" className="py-24">
        <div className="container">
          <div className="max-w-4xl mx-auto rounded-3xl border border-primary/30 bg-gradient-to-br from-card to-secondary/30 p-10 md:p-14 text-center glow-purple relative overflow-hidden">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-72 h-72 bg-primary/20 blur-[100px] rounded-full" />
            <div className="relative">
              <Icon name="Flame" size={40} className="mx-auto text-primary mb-4" />
              <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">Готов восстать?</h2>
              <p className="text-muted-foreground mb-8 max-w-lg mx-auto">
                Присоединяйся к PhoenixPlay и начни свой путь к вершине рейтинга уже сегодня.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Button size="lg" className="bg-gradient-to-r from-primary to-accent hover:opacity-90 text-white font-semibold">
                  <Icon name="UserPlus" size={18} className="mr-2" /> Создать аккаунт
                </Button>
                <Button size="lg" variant="outline" className="border-border bg-secondary/40 hover:bg-secondary">
                  <Icon name="Mail" size={18} className="mr-2" /> Написать нам
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border py-10">
        <div className="container flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 rounded-md bg-gradient-to-br from-primary to-accent flex items-center justify-center">
              <Icon name="Flame" size={16} className="text-white" />
            </div>
            <span className="font-display font-bold">Phoenix<span className="text-gradient">Play</span></span>
          </div>
          <p className="text-sm text-muted-foreground">© 2026 PhoenixPlay. Все права защищены.</p>
          <div className="flex gap-4">
            {['Send', 'Youtube', 'Twitch', 'Github'].map((s) => (
              <a key={s} href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Icon name={s} size={20} />
              </a>
            ))}
          </div>
        </div>
      </footer>
    </div>
  );
};

const SectionHeader = ({ badge, title, subtitle }: { badge: string; title: string; subtitle: string }) => (
  <div className="text-center max-w-2xl mx-auto mb-12">
    <span className="inline-block px-4 py-1 rounded-full border border-primary/40 bg-primary/10 text-sm text-primary mb-4">{badge}</span>
    <h2 className="font-display text-4xl md:text-5xl font-bold mb-3">{title}</h2>
    <p className="text-muted-foreground">{subtitle}</p>
  </div>
);

const ProfileRow = ({ label, value }: { label: string; value: string }) => (
  <div className="flex items-center justify-between py-2 border-b border-border/60 last:border-0">
    <span className="text-sm text-muted-foreground">{label}</span>
    <span className="text-sm font-medium text-silver">{value}</span>
  </div>
);

export default Index;
