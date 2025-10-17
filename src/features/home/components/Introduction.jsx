import Logo from "../../../shared/components/Logo";
import Text from "../../../shared/components/Text";

const Introduction = () => {
  return (
    <div className="flex flex-col items-center gap-8">
      <Logo />
      <div className="p-8 bg-white/50 rounded-2xl backdrop-blur-sm max-w-3xl">
        <Text className="text-center text-lg leading-relaxed text-gray-900">
          {`Do it! Just do it! Don't let your dreams be dreams.
해버려! 그냥 해버리라고! 네 꿈을 꿈으로 남게 하지 마!

Yesterday, you said tomorrow. So just do it! Make your dreams come true!
어제의 너는 내일 한다고 했지. 그러니까 해버리라고! 꿈을 이루란 말이야!

Just do it! Some people dream success, while you are gonna wake up and work hard at it. Nothing is impossible!
그냥 해버려! 어떤 사람들이 성공을 꿈꾸고 있을때, 넌 일어나서 열심히 노력할거야. 불가능은 없어!

You should get to the point where anyone else would quit and you are not gonna stop there!
넌 다른 사람들이 모두 포기할 때까지 간 뒤에, 거기서 멈추지 않을거야!

No, what are you waiting for! Do it! Just do it! Yes you can!
아니, 뭘 기다리는거야! 해버리라고! 그냥 해버려! 그래 넌 할 수 있어!

Just do it!
그냥 해버려!

If you tired of starting over, stop, giving, up
계속 새로 시작하는게 지겹다면, 포기. 하지. 마.`}
        </Text>
      </div>
    </div>
  );
};

export default Introduction;
