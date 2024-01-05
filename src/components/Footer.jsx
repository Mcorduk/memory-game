export default function Footer({ isDarkMode }) {
  if (!isDarkMode) {
    return (
      <p className="quote">
        &quot;Tovolar&apos;s howl of command was too much to resist, even for
        Arlinn&apos;s own loyal pack...&quot; - Pack&apos;s Betrayal
      </p>
    );
  }
  if (isDarkMode) {
    return (
      <p className="quote">
        &quot;Witch, werewolf, and cathar stood shoulder to shoulder... ready to
        stop Tovolar&apos;s assault, or die trying.&quot; - Defend The Celestus
      </p>
    );
  }
}
