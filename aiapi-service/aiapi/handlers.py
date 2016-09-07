import tornado
from tornado import web
import os.path


CHUNKSIZE=16000
base_path = "../storage"


class RequestHandler(tornado.web.RequestHandler):

    def set_status_404(self):
        self.clear()
        self.set_status(404)
        self.finish("<html><body>Not Found</body></html>")

class ApiHandler(RequestHandler):

    def get(self, filename):

        self.set_header("Content-Type","application/octet-stream")
        self.set_header("Content-Disposition", "filename=%s" % filename)

        file_path = '/'.join([base_path, "remix", filename])
        if os.path.isfile(file_path):
            with open(file_path,'rb') as f:
                while True:
                    data = f.read(CHUNKSIZE)
                    self.write(data)
                    if not data:
                        break
        else:
            self.set_status_404()

    def put(self, filename):

        #file_path = '/'.join([base_path, "songs", filename]) write it to the remix for now
        file_path = '/'.join([base_path, "remix", filename])

        data = self.request.body

        if not data:
            self._status_404()
            return

        with open(file_path, 'wb') as f:
            f.write(data)

    def delete(self, filename):

        file_path = '/'.join([base_path, "songs", filename])

        if os.path.isfile(file_path):
            os.remove(file_path)
