import Card from '../../components/common/Card';
import PageHeader from '../../components/common/PageHeader';
import Input from '../../components/common/Input';
import Button from '../../components/common/Button';
import { chatMessages, chatThreads } from '../../mocks/chatMock';

function AIChatPage() {
  return (
    <div className="page-shell">
      <PageHeader
        eyebrow="AI chat"
        title="Study conversation"
        description="A UI-only chat surface ready for future backend integration."
      />
      <section className="split-panel">
        <Card title="Threads" description="Recent tutor chats">
          <div className="simple-list">
            {chatThreads.map((thread) => (
              <div className="list-item" key={thread.id}>
                <span className="list-icon">TH</span>
                <div>
                  <strong>{thread.title}</strong>
                  <div className="muted">{thread.updatedAt}</div>
                </div>
              </div>
            ))}
          </div>
        </Card>
        <Card title="Conversation" description="Current tutoring thread">
          <div className="chat-window">
            {chatMessages.map((message) => (
              <div key={message.id} className={'chat-bubble ' + message.sender}>
                <div>{message.text}</div>
                <div style={{ marginTop: 8, fontSize: '0.8rem', opacity: 0.8 }}>{message.time}</div>
              </div>
            ))}
          </div>
          <div style={{ marginTop: 18 }}>
            <Input as="textarea" placeholder="Ask the AI tutor to explain a concept or create new practice questions" />
            <div style={{ marginTop: 14 }}><Button>Send message</Button></div>
          </div>
        </Card>
      </section>
    </div>
  );
}

export default AIChatPage;
