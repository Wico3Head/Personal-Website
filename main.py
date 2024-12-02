from flask import Flask, render_template

app = Flask(__name__)

@app.route('/')
def home():
    return render_template('index.html') 

@app.route('/alex')
def alex():
    return render_template('alex.html')

@app.route('/blog')
def blog():
    return render_template('blog.html')

@app.route('/contact')
def contact():
    return render_template('contact.html')

@app.route('/project')
def project():
    return render_template('project.html')

@app.route('/tutor')
def tutor():
    return render_template('tutor.html')

if __name__ == '__main__':
    app.run(debug=True)