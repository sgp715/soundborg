import tornado
from tornado import ioloop
from tornado import web
from tornado import httpserver
from handlers import ApiHandler

def make_app():
    return web.Application([(r"/api/(.*)", ApiHandler)], autoreload=True)

if __name__ == "__main__":
    app = make_app()
    server = httpserver.HTTPServer(app)
    server.listen(8000)
    ioloop.IOLoop.current().start()
