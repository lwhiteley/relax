export default {
  roles: ['public', 'user', 'admin', 'developer', 'writer'],
  accessControl: {
    anon: ['public'],
    public: ['public', 'user', 'writer', 'developer', 'admin'],
    user: ['user', 'writer', 'developer', 'admin'],
    writer: ['writer', 'developer', 'admin'],
    developer: ['developer', 'admin'],
    admin: ['admin']
  }
}
